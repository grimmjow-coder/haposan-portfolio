import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono-jb' });

export const metadata: Metadata = {
  metadataBase: new URL('https://haposan-portfolio-o6r2kvst4-haposan12s-projects.vercel.app'),
  title: 'Haposan Siahaan — Backend Engineer',
  description: 'Backend engineer building robust, scalable systems in Go, Python, and Node.js since 2019.',
  openGraph: {
    title: 'Haposan Siahaan — Backend Engineer',
    description: 'Backend engineer building robust, scalable systems in Go, Python, and Node.js since 2019.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haposan Siahaan — Backend Engineer',
    description: 'Building robust, scalable systems in Go, Python, and Node.js since 2019.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
