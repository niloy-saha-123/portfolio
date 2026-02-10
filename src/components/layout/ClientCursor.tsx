'use client';

import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { usePathname } from 'next/navigation';

/* Static files load more reliably than data URIs (fixes cursor reverting on reload/navigation) */
const LIGHT_CURSOR = "url('/cursor-light.svg') 16 16, auto";
const DARK_CURSOR = "url('/cursor-dark.svg') 16 16, auto";

export default function ClientCursor() {
    const { theme } = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        const applyCursor = () => {
            const cursorUrl = theme === 'dark' ? DARK_CURSOR : LIGHT_CURSOR;
            // Force apply to html and body
            if (document.documentElement) document.documentElement.style.cursor = cursorUrl;
            if (document.body) document.body.style.cursor = cursorUrl;
        };

        // Apply immediately and on any chance (timeout helps with hydration race conditions)
        applyCursor();
        const timeoutId = setTimeout(applyCursor, 100);

        return () => clearTimeout(timeoutId);
        // We depend on pathname to trigger re-application on navigation, even if not used in logic
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme, pathname]);

    return null; // This component renders nothing visually
}
