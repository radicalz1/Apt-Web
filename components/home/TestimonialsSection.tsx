import { useState, useRef, useEffect } from 'react';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { PlayCircle, ArrowLeft, ArrowRight } from 'lucide-react';

export const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    { quote: t('testimonials.testi1'), author: t('testimonials.author1'), rotation: '-rotate-1', img: 'https://i.pravatar.cc/150?u=budi' },
    { quote: t('testimonials.testi2'), author: t('testimonials.author2'), rotation: 'rotate-1', img: 'https://i.pravatar.cc/150?u=sarah' },
    { quote: t('testimonials.testi3'), author: t('testimonials.author3'), rotation: '-rotate-1', img: 'https://i.pravatar.cc/150?u=john' },
    { quote: t('testimonials.testi4'), author: t('testimonials.author4'), rotation: 'rotate-1', img: 'https://i.pravatar.cc/150?u=jane' },
  ];

  const handleNav = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.children[0].getBoundingClientRect().width;
      trackRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }, [currentIndex]);

  return (
    <AnimatedSection id="testimoni" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800 section-bg-pattern">
      <SectionHeader title={t('testimonials.title')} description={t('testimonials.description')}>
        <div className="flex gap-2">
          <button onClick={() => handleNav('prev')} disabled={currentIndex === 0} className="p-2 rounded-full border border-slate-200 dark:border-slate-800 disabled:opacity-50"><ArrowLeft size={16} /></button>
          <button onClick={() => handleNav('next')} disabled={currentIndex >= testimonials.length - 3} className="p-2 rounded-full border border-slate-200 dark:border-slate-800 disabled:opacity-50"><ArrowRight size={16} /></button>
        </div>
      </SectionHeader>
      <div className="testimonial-carousel-container">
        <div ref={trackRef} className="testimonial-carousel-track">
          {testimonials.map((testi, i) => (
            <div key={i} className="testimonial-slide">
              <figure className={`h-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 p-6 ${testi.rotation}`}>
                <blockquote className="text-slate-700 dark:text-slate-200 relative">
                  <span className="absolute -top-3 -left-4 text-6xl text-slate-200 dark:text-slate-700 font-display opacity-80">“</span>
                  <span className="relative z-10">{testi.quote}</span>
                </blockquote>
                <figcaption className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <img src={testi.img} alt={testi.author} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-200 font-medium">{testi.author}</div>
                    <button className="text-xs text-accent-600 dark:text-accent-400 flex items-center gap-1 hover:underline">
                      <PlayCircle size={14} /> {t('testimonials.playAudio')}
                    </button>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
