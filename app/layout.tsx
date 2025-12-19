import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import config from '@/data/config.json';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.basics.name}`,
    default: config.basics.name,
  },
  description: config.basics.summary,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${jetbrainsMono.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
