import { useEffect } from 'react';
import { useLightbox } from '../../contexts/LightboxContext.tsx';
import { X } from 'lucide-react';

export const ImageLightbox = () => {
  const { isOpen, imageUrl, closeLightbox } = useLightbox();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, closeLightbox]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div 
      className={`fixed inset-0 z-[999] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={closeLightbox}
      ></div>
      <button 
        onClick={closeLightbox}
        className="absolute top-4 right-4 z-10 p-2 text-white bg-black/30 rounded-full hover:bg-black/50"
        aria-label="Close image viewer"
      >
        <X size={24} />
      </button>
      <div className="relative max-w-full max-h-full">
        <img 
          src={imageUrl} 
          alt="Enlarged view" 
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};
