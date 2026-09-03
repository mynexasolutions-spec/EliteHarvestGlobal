import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { Header } from '@/components/Header';
import { site } from '@/data/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'Elite Harvest Global | Trusted Import-Export Partner',
    template: '%s | Elite Harvest Global',
  },
  description:
    'Elite Harvest Global connects global buyers with quality agricultural products, food & spices, textiles, packaging materials, and comprehensive import-export support services.',
  keywords: [
    'Elite Harvest Global',
    'import export company India',
    'agricultural products export',
    'food products exporter',
    'spices export India',
    'textile export company',
    'packaging materials supplier',
    'global trade services',
  ],
  authors: [{ name: 'Elite Harvest Global' }],
  creator: 'Elite Harvest Global',
  publisher: 'Elite Harvest Global',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.domain,
    siteName: 'Elite Harvest Global',
    title: 'Elite Harvest Global | Trusted Import-Export Partner',
    description:
      'Connecting global buyers with quality commercial products. Agricultural, food, textile, packaging & import-export support.',
    images: [
      {
        url: '/assets/images/harvest-field-hero.png',
        width: 1200,
        height: 630,
        alt: 'Elite Harvest Global - Agriculture and global trade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Harvest Global | Agriculture and Global Trade',
    description: 'Commercial agricultural products, food ingredients, packaging, and import-export support.',
    images: ['/assets/images/harvest-field-hero.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#123e32',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
      </head>
      <body className={`${inter.className} ${plusJakartaSans.className} font-sans antialiased`}>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
