'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';
import Head from 'next/head';


const App = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme');
          if (newTheme === 'light' || newTheme === 'dark') {
            setTheme(newTheme);
          }
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>API Reference</title>
        <link rel="icon" href="/logo/okto-icon.png" sizes="any" />
      </Head>
      <ApiReferenceReact
        configuration={{
          spec: {
            url: '/api-sec',
          },
          theme: 'none',
          darkMode: theme === 'dark',
          hiddenClients: [],
          hideDarkModeToggle: true,
        }}
      />
    </>
  );
};

export default App;