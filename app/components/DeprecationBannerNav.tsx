'use client';

import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function DeprecationBanner() {
  return (
    <div className="px-4 py-2 bg-gradient-to-r from-amber-50/90 to-amber-100/90 dark:from-amber-950/30 dark:to-amber-900/30 border-b border-amber-200 dark:border-amber-800/30">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-x-2">
        <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-500 flex-shrink-0" />
        <p className="text-sm text-amber-700 dark:text-amber-300">
          This documentation is deprecated. Visit our{' '}
          <Link
            href="https://docsv2.okto.tech"
            className="font-medium text-amber-800 dark:text-amber-200 hover:text-amber-900 dark:hover:text-amber-100 underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            new documentation
          </Link>
          {' '}for the latest updates.
        </p>
      </div>
    </div>
  );
}