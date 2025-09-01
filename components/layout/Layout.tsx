import React from 'react';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { BackToTopButton } from '../common/BackToTopButton.tsx';
import { StickyCtaBar } from '../common/StickyCtaBar.tsx';
import { useExitIntent } from '../../hooks/useExitIntent.ts';
import { DevTools } from '../common/DevTools.tsx';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useExitIntent();
  
  return (
    <>
      <Header />
      <main id="konten">
        {children}
      </main>
      <Footer />
      <BackToTopButton />
      <StickyCtaBar />
      <DevTools />
    </>
  );
};