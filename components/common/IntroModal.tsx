import { useModals } from '../../contexts/ModalContext.tsx';

export const IntroModal = () => {
  const { isIntroOpen, toggleIntro } = useModals();

  if (!isIntroOpen) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" onClick={() => toggleIntro(false)}></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-3xl rounded-3xl overflow-hidden bg-black">
        <div className="aspect-video grid place-content-center text-white">
          {/* Replace with actual video embed */}
          <p>Video Player Placeholder</p>
        </div>
      </div>
    </div>
  );
};
