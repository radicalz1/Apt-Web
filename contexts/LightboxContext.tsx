import React, { createContext, useContext, useState, useCallback } from 'react';

interface LightboxContextType {
  isOpen: boolean;
  imageUrl: string | null;
  openLightbox: (url: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const openLightbox = useCallback((url: string) => {
    setImageUrl(url);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    // Delay clearing image to allow for fade-out transition
    setTimeout(() => setImageUrl(null), 300);
  }, []);

  return (
    <LightboxContext.Provider value={{ isOpen, imageUrl, openLightbox, closeLightbox }}>
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (context === undefined) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
