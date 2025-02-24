'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getLayout, layoutMapping } from '../layouts';

type LayoutContextType = {
  setLayout: (layoutName: keyof typeof layoutMapping) => void;
  setTheme: (theme: string) => void;
  theme: string;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layoutName, setLayout] = useState<keyof typeof layoutMapping>('main');
  const [theme, setTheme] = useState<string>('light'); // Default theme

  const Layout: React.ElementType = getLayout(layoutName);

  return (
    <LayoutContext.Provider value={{ setLayout, setTheme, theme }}>
      <Layout>{children}</Layout>
    </LayoutContext.Provider>
  );
}

export function useLayout(): LayoutContextType {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}
