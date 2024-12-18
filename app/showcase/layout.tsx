// app/showcase/layout.js or wherever your layout file is located
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Showcase',
  description: 'Cool apps made by Okto',
}

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}
  