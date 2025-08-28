import { useEffect } from 'react';
import { useModals } from '../contexts/ModalContext.tsx';

export const useExitIntent = () => {
  const { openExitIntentModal } = useModals();

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      // If the mouse is leaving the top of the viewport
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        openExitIntentModal();
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [openExitIntentModal]);
};
