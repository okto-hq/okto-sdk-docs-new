// app/tools/layout.js or wherever your layout file is located
import type { ReactNode } from 'react';

export const metadata = {
    title: 'Server API Reference',
}

export default function ToolsLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}
