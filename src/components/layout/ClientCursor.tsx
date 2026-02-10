'use client';

import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { usePathname } from 'next/navigation';

const LIGHT_CURSOR = "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><circle cx=\"16\" cy=\"16\" r=\"14\" fill=\"%231a1a1a\" stroke=\"%23000\" stroke-width=\"1\"/><path d=\"M16 2 L16 30 M2 16 Q16 20 30 16 M4 10 Q16 13 28 10 M4 22 Q16 25 28 22 M6 5 Q9 16 4 27 M26 5 Q23 16 28 27\" stroke=\"%23333\" stroke-width=\"0.8\" fill=\"none\" opacity=\"0.7\"/><path d=\"M8 11 Q11 7 15 9 Q16 14 12 17 Q8 16 8 11 Z\" fill=\"%23fff\"/><path d=\"M24 11 Q21 7 17 9 Q16 14 20 17 Q24 16 24 11 Z\" fill=\"%23fff\"/></svg>') 16 16, auto";
const DARK_CURSOR = "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><circle cx=\"16\" cy=\"16\" r=\"14\" fill=\"%23E62429\" stroke=\"%23000\" stroke-width=\"1\"/><path d=\"M16 2 L16 30 M2 16 Q16 20 30 16 M4 10 Q16 13 28 10 M4 22 Q16 25 28 22 M6 5 Q9 16 4 27 M26 5 Q23 16 28 27\" stroke=\"%23000\" stroke-width=\"0.8\" fill=\"none\" opacity=\"0.6\"/><path d=\"M8 11 Q11 7 15 9 Q16 14 12 17 Q8 16 8 11 Z\" fill=\"%23fff\"/><path d=\"M24 11 Q21 7 17 9 Q16 14 20 17 Q24 16 24 11 Z\" fill=\"%23fff\"/></svg>') 16 16, auto";

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
