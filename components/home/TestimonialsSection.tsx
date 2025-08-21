import { Section } from '../common/Section.tsx';
import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    { quote: t('testimonials.testi1'), author: t('testimonials.author1') },
    { quote: t('testimonials.testi2'), author: t('testimonials.author2') },
    { quote: t('testimonials.testi3'), author: t('testimonials.author3') },
  ];

  return (
    <Section id="testimoni" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800">
      <SectionHeader title={t('testimonials.title')} description={t('testimonials.description')} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testi, i) => (
          <figure key={i} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 p-6">
            <blockquote className="text-slate-700 dark:text-slate-200">{testi.quote}</blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">{testi.author}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
};
