import React, { createContext, useContext, useState } from 'react';
import { Policy } from '../types/index.ts';

interface ModalContextType {
  isCartOpen: boolean;
  toggleCart: (isOpen: boolean) => void;
  isPolicyOpen: boolean;
  activePolicy: Policy | null;
  openPolicyModal: (policy: Policy) => void;
  closePolicyModal: () => void;
  isIntroOpen: boolean;
  toggleIntro: (isOpen: boolean) => void;
  isExitIntentOpen: boolean;
  openExitIntentModal: () => void;
  closeExitIntentModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isPolicyOpen, setPolicyOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<Policy | null>(null);
  const [isIntroOpen, setIntroOpen] = useState(false);
  const [isExitIntentOpen, setExitIntentOpen] = useState(false);

  const openPolicyModal = (policy: Policy) => {
    setActivePolicy(policy);
    setPolicyOpen(true);
  };
  
  const closePolicyModal = () => {
    setPolicyOpen(false);
    setTimeout(() => setActivePolicy(null), 300);
  };

  const openExitIntentModal = () => setExitIntentOpen(true);
  const closeExitIntentModal = () => setExitIntentOpen(false);

  const value = { 
    isCartOpen, toggleCart: setCartOpen,
    isPolicyOpen, activePolicy, openPolicyModal, closePolicyModal,
    isIntroOpen, toggleIntro: setIntroOpen,
    isExitIntentOpen, openExitIntentModal, closeExitIntentModal
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
};
