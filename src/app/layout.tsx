import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import MotionProvider from '@/components/motion/MotionProvider';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#583FBC',
};

export const metadata: Metadata = {
  title: 'Shital Lanke | Fullstack Developer — React.js, Next.js & Nest.js',
  description:
    "Explore Shital Lanke's fullstack development portfolio featuring React.js, Next.js, Nest.js, SaaS applications, enterprise dashboards, real-time systems, and Generative AI projects.",
  keywords: [
    'Shital Lanke',
    'Fullstack Developer',
    'React.js Developer',
    'Next.js Developer',
    'Nest.js Developer',
    'TypeScript',
    'SaaS Architecture',
    'Multi-tenant HRMS',
    'Enterprise Frontend',
    'Performance Optimization',
    'Generative AI Frontend',
  ],
  authors: [{ name: 'Shital Lanke' }],
  creator: 'Shital Lanke',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shitallanke.dev',
    title: 'Shital Lanke | Fullstack Developer — React.js, Next.js & Nest.js',
    description:
      'Fullstack Developer specializing in React.js, Next.js, Nest.js, enterprise SaaS platforms, real-time logistics systems, and Generative AI integrations.',
    siteName: 'Shital Lanke Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shital Lanke | Fullstack Developer — React.js, Next.js & Nest.js',
    description:
      'Fullstack Developer specializing in React.js, Next.js, Nest.js, enterprise SaaS, and AI features.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Enable scroll-reveal before first paint (no flash). Falls back to visible
            content if motion is reduced or the JS bundle never boots. */}
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static, trusted inline script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion-ok');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.remove('motion-ok')},4000)})();`,
          }}
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject
          attributes into <body> before React hydrates. Only affects this element's
          own attributes — mismatches inside the page are still reported. */}
      <body
        className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#DDD6FE] selection:text-[#3B28A3]"
        suppressHydrationWarning
      >
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
