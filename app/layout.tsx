import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Providers } from "./providers";
import NavbarComponent from './components/Navbar';
import AskCookbook from "./components/AskCookbook";
import DeprecationBanner from './components/DeprecationBannerNav';
import Footer from './components/Footer';

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
            <div className="min-h-screen flex flex-col">
              <NavbarComponent />
              <DeprecationBanner />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </RootProvider>
        <AskCookbook />
      </body>
    </html>
  );
}
