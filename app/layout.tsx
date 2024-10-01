import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Providers } from "./providers";
import NavbarComponent from './components/Navbar';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo/okto-icon.png" sizes="any" />
      </head>
      <body>
        <RootProvider>
          <Providers>
            <NavbarComponent />
            {children}
          </Providers>
        </RootProvider>
      </body>
    </html>
  );
}
