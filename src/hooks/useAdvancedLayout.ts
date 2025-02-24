'use client';
import { useLayout } from '../context/LayoutContext';
import { useEffect } from 'react';
import { layoutMapping } from '../layouts';

export function useAdvancedLayout(layoutName: keyof typeof layoutMapping, theme: string) {
  const { setLayout, setTheme } = useLayout();

  useEffect(() => {
    setLayout(layoutName);
    setTheme(theme);
  }, [layoutName, theme, setLayout, setTheme]);
}
