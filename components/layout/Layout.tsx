import React from 'react';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { BackToTopButton } from '../common/BackToTopButton.tsx';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main id="konten">
        {children}
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};