// app/providers.tsx

'use client'; // Jadikan ini sebagai Client Component

import { ThemeProvider } from 'next-themes';
import { type ReactNode, useState, useEffect } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}