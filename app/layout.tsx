import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Rathan P — Founder, Designer & Builder',
  description:
    'Rathan P is the founder of XTICH, building modern apparel and campus wear while exploring design, entrepreneurship and financial markets.',
  keywords: [
    'Rathan P',
    'XTICH',
    'Versity',
    'Founder',
    'UI Designer',
    'Trader',
    'Campus Wear',
    'Apparel India',
    'Entrepreneurship',
  ],
  authors: [{ name: 'Rathan P' }],
  creator: 'Rathan P',
  metadataBase: new URL('https://xtich.in'),
  openGraph: {
    title: 'Rathan P — Founder, Designer & Builder',
    description:
      'Rathan P is the founder of XTICH, building modern apparel and campus wear while exploring design, entrepreneurship and financial markets.',
    url: 'https://xtich.in',
    siteName: 'Rathan P',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rathan P — Founder, Designer & Builder',
    description:
      'Rathan P is the founder of XTICH, building modern apparel and campus wear while exploring design, entrepreneurship and financial markets.',
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-editorial-black antialiased selection:bg-editorial-black selection:text-bg">
        {children}
      </body>
    </html>
  );
}
