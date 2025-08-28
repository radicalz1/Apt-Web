import { useModals } from '../../contexts/ModalContext.tsx';
import { X } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation.ts';

export const IntroModal = () => {
  const { isIntroOpen, toggleIntro } = useModals();
  const { t } = useTranslation();

  if (!isIntroOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => toggleIntro(false)}></div>
      <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-black shadow-2xl animate-fade-in-up">
        <button 
          className="absolute top-3 right-3 z-10 p-2 text-white bg-black/30 rounded-full hover:bg-black/50" 
          onClick={() => toggleIntro(false)} 
          aria-label={t('policy.close')}
        >
          <X size={24} />
        </button>
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/0B2j_22vo5s?autoplay=1&rel=0&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
