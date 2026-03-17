'use client';

import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

export function useDevicePerformance(): 'low' | 'medium' | 'high' {
  const [performance, setPerformance] = useState<'low' | 'medium' | 'high'>('high');

  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = window.matchMedia('(pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 768;
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
      const hardwareConcurrency = navigator.hardwareConcurrency;

      if (isMobile || isSmallScreen || (memory && memory <= 4) || hardwareConcurrency <= 4) {
        setPerformance('low');
      } else if ((memory && memory <= 8) || hardwareConcurrency <= 8) {
        setPerformance('medium');
      } else {
        setPerformance('high');
      }
    };

    checkPerformance();
  }, []);

  return performance;
}
