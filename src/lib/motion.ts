import type { CSSProperties } from 'react';

/** Stagger delay for a [data-reveal] element. */
export const revealDelay = (ms: number): CSSProperties =>
  ({ '--reveal-delay': `${ms}ms` }) as CSSProperties;

/** Delay for CSS entrance classes (.hero-in, .line-mask, .pop-in, .draw-line…). */
export const animDelay = (ms: number): CSSProperties => ({ '--d': `${ms}ms` }) as CSSProperties;
