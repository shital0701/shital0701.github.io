'use client';

import { useEffect, useRef } from 'react';

/**
 * Global, dependency-free motion engine.
 *
 * Declarative hooks via data attributes / classes:
 *  - [data-reveal="up|down|left|right|scale|blur|clip"]  → animates in when scrolled into view
 *    (stagger with style={{ '--reveal-delay': '120ms' }})
 *  - .tilt          → subtle 3D tilt following the cursor
 *  - .spotlight     → radial glow following the cursor (sets --mx / --my)
 *  - [data-magnetic] → element is gently pulled toward the cursor
 *  - [data-parallax-root] + [data-depth="0.03"] → pointer parallax layers
 */
export default function MotionProvider() {
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll reveal ---------------------------------------------------------
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');

    if (!root.classList.contains('motion-ok') || !('IntersectionObserver' in window)) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', '');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    const observeAll = (scope: ParentNode) => {
      scope.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])').forEach((el) => {
        io.observe(el);
      });
    };
    observeAll(document);

    // Pick up elements mounted later (tab filters, modals, etc.)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches('[data-reveal]:not([data-revealed])')) io.observe(node);
          observeAll(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  // In-page anchor links ---------------------------------------------------
  // Next's <Link href="#x"> does nothing when the URL already ends in #x
  // (e.g. a second click on "Contact"). Handle every same-page hash link here
  // so it always scrolls. Capture phase runs before <Link>'s onClick, which
  // then sees defaultPrevented and skips its own navigation.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const link = e.target instanceof Element ? e.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      if (!link) return;
      const id = decodeURIComponent((link.getAttribute('href') ?? '').slice(1));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      e.preventDefault();
      // Uses html { scroll-behavior: smooth; scroll-padding-top } from globals.css
      target.scrollIntoView({ block: 'start' });
      if (window.location.hash !== `#${id}`) {
        history.pushState(history.state, '', `#${id}`);
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Scroll progress bar --------------------------------------------------
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Pointer effects: tilt, spotlight, magnetic, parallax ------------------
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) return;

    let frame = 0;
    let lastEvent: PointerEvent | null = null;
    let activeTilt: HTMLElement | null = null;
    let activeMagnet: HTMLElement | null = null;
    let activeParallax: HTMLElement | null = null;

    const resetTilt = (el: HTMLElement) => {
      el.removeAttribute('data-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };
    const resetParallax = (rootEl: HTMLElement) => {
      rootEl.querySelectorAll<HTMLElement>('[data-depth]').forEach((layer) => {
        layer.style.translate = '0px 0px';
      });
    };

    const process = () => {
      frame = 0;
      const e = lastEvent;
      if (!e) return;
      const target = e.target instanceof Element ? e.target : null;

      // Spotlight
      const spot = target?.closest<HTMLElement>('.spotlight');
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty('--mx', `${e.clientX - r.left}px`);
        spot.style.setProperty('--my', `${e.clientY - r.top}px`);
      }

      // Tilt
      const tilt = target?.closest<HTMLElement>('.tilt') ?? null;
      if (activeTilt && activeTilt !== tilt) resetTilt(activeTilt);
      activeTilt = tilt;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        const max = Number(tilt.dataset.tiltMax ?? 6);
        tilt.setAttribute('data-tilting', '');
        tilt.style.setProperty('--rx', `${(-py * max).toFixed(2)}deg`);
        tilt.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`);
      }

      // Magnetic
      const magnet = target?.closest<HTMLElement>('[data-magnetic]') ?? null;
      if (activeMagnet && activeMagnet !== magnet) activeMagnet.style.translate = '0px 0px';
      activeMagnet = magnet;
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const strength = Number(magnet.dataset.magnetic || 0.25);
        const dx = (e.clientX - (r.left + r.width / 2)) * strength;
        const dy = (e.clientY - (r.top + r.height / 2)) * strength;
        magnet.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
      }

      // Parallax
      const pRoot = target?.closest<HTMLElement>('[data-parallax-root]') ?? null;
      if (activeParallax && activeParallax !== pRoot) resetParallax(activeParallax);
      activeParallax = pRoot;
      if (pRoot) {
        const r = pRoot.getBoundingClientRect();
        const cx = e.clientX - (r.left + r.width / 2);
        const cy = e.clientY - (r.top + r.height / 2);
        pRoot.querySelectorAll<HTMLElement>('[data-depth]').forEach((layer) => {
          const depth = Number(layer.dataset.depth);
          layer.style.translate = `${(cx * depth).toFixed(1)}px ${(cy * depth).toFixed(1)}px`;
        });
      }
    };

    const onMove = (e: PointerEvent) => {
      lastEvent = e;
      if (!frame) frame = requestAnimationFrame(process);
    };
    const onLeave = () => {
      if (activeTilt) resetTilt(activeTilt);
      if (activeMagnet) activeMagnet.style.translate = '0px 0px';
      if (activeParallax) resetParallax(activeParallax);
      activeTilt = activeMagnet = activeParallax = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
