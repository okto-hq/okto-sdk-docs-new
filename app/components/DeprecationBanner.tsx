'use client';

import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function DeprecationBanner() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 mb-8 bg-gradient-to-r from-amber-50/80 to-amber-100/80 dark:from-amber-950/20 dark:to-amber-900/20 rounded-lg border-2 border-amber-200 dark:border-amber-800/30 hover:border-amber-300 dark:hover:border-amber-700/40 transition-all shadow-sm">
      <div className="flex-1 pr-4 mb-6 lg:mb-0 flex items-center gap-3">
        <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500 flex-shrink-0" />
        <div>
          <h2 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-2 mt-2">
            Documentation Deprecated
          </h2>
          <p className="text-amber-700 dark:text-amber-300 m-0">
            This documentation is no longer maintained. Please visit our new documentation for the latest updates.
          </p>
        </div>
      </div>
      <Link
        href="https://docsv2.okto.tech"
        className="relative group no-underline p-3 rounded-md border-2 border-amber-300 dark:border-amber-700/50 bg-white dark:bg-amber-900/20 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_2px_4px_-2px_rgba(0,0,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.15),0_4px_6px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.6),0_4px_6px_-4px_rgba(0,0,0,0.5)] dark:hover:bg-amber-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-amber-800 dark:text-amber-200 font-medium">
          Visit New Docs →
        </span>
      </Link>
    </div>
  );
} 