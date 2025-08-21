import { HeroContent } from './hero/HeroContent.tsx';
import { HeroVisual } from './hero/HeroVisual.tsx';

export const HeroSection = () => {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl bg-accent-400/30 dark:bg-accent-700/25"></div>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl bg-brand-300/30 dark:bg-brand-700/25"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};
