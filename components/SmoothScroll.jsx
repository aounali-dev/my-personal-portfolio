'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
  }, []);

  return <>{children}</>;
}