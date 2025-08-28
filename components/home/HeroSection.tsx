import { HeroContent } from './hero/HeroContent.tsx';
import { HeroVisualCards } from './hero/HeroVisualCards.tsx';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="beranda" className="relative overflow-hidden min-h-screen flex items-center">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-brand-300/30 dark:bg-brand-700/25 blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 h-72 w-72 rounded-full bg-accent-400/30 dark:bg-accent-700/25 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-300/20 dark:bg-brand-700/20 blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-accent-400/20 dark:bg-accent-700/20 blur-3xl animate-blob animation-delay-6000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <HeroContent />
          <HeroVisualCards />
        </div>
      </div>
      <a href="/#trust-badges" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-slate-400 dark:text-slate-600" />
      </a>
    </section>
  );
};