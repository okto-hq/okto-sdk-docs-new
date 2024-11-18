import type { ReactNode } from 'react';

export const metadata = {
    title: 'Server API Errors',
}

export default function ToolsLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}
