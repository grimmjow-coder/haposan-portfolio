// app/components/ThemeToggleButton.tsx

'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: '22px', height: '22px' }} />; // Placeholder
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme} title="Toggle dark mode" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 .5 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 8 .5zm0 15a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zm12.95-12.95a.5.5 0 0 1-.707.707l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414zM2.757 13.243a.5.5 0 0 1 .707-.707l-1.414-1.414a.5.5 0 0 1-.707.707l1.414 1.414zM15.5 8a.5.5 0 0 1-.5-.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5-.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.243 5.243a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707.707l-1.414 1.414zM1.343 2.05a.5.5 0 0 1 .707.707L.636 4.172a.5.5 0 0 1-.707-.707L1.343 2.05z"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></svg>
      )}
    </button>
  );
};

export default ThemeToggleButton;