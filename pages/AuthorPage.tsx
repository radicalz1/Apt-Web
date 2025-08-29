import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { authorsData } from '../data/authors.ts';
import { Section } from '../components/common/Section.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { useTranslation } from '../hooks/useTranslation.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { Language } from '../types/index.ts';
import { TestTube2, BrainCircuit, ShieldCheck, Dna, FlaskConical, Target, Route, Lightbulb, Sparkles, Sigma } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection.tsx';

const ExpertiseCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="p-6 rounded-2xl bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800 h-full text-center">
        <div className="flex-shrink-0 h-16 w-16 grid place-items-center rounded-xl bg-white dark:bg-slate-800 mx-auto shadow-sm">
            {icon}
        </div>
        <h4 className="mt-4 font-semibold text-slate-800 dark:text-slate-100">{title}</h4>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
);

const TimelineItem = ({ icon, title, children, isLast = false }: { icon: React.ReactNode, title: string, children: React.ReactNode, isLast?: boolean }) => (
    <div className="relative pl-16">
        {!isLast && <div className="absolute left-[1.375rem] top-12 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>}
        <div className="absolute left-0 top-4">
            <div className="h-12 w-12 grid place-items-center rounded-full bg-slate-100 dark:bg-slate-800 ring-8 ring-slate-50 dark:ring-slate-950">
                {icon}
            </div>
        </div>
        <div className="prose dark:prose-invert max-w-none pt-4 pb-12">
            <h3 className="font-display text-2xl font-bold">{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: children as string }} />
        </div>
    </div>
);

const GlossaryItem = ({ termKey }: { termKey: string }) => {
  const { t } = useTranslation();
  return (
    <details className="group p-5 bg-slate-100/60 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800">
      <summary className="cursor-pointer list-none flex items-center justify-between font-semibold">
        {t(`authorPage.glossary.${termKey}.title`)}
        <span className="transition group-open:rotate-180">⌄</span>
      </summary>
      <div className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2"
           dangerouslySetInnerHTML={{ __html: t(`authorPage.glossary.${termKey}.content`) }} />
    </details>
  );
};


export default function AuthorPage() {
  const { authorId } = useParams();
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  const author = authorsData.find(a => a.id === authorId);

  useTitle(author ? `${author.name} - ${author.title}` : 'Author Not Found');

  if (!author) {
    return <Navigate to="/404" replace />;
  }
  
  const shortBio = author.bio[language as Language] || author.bio['en'];
  const fullBio = author.fullBio[language as Language] || author.fullBio['en'];
  const bioSections = fullBio.split('<br/><br/>');

  const doc = new DOMParser().parseFromString(`<div>${bioSections[1]}</div>`, 'text/html');
  const expertiseList = Array.from(doc.querySelectorAll('li')).map(li => ({
      title: li.querySelector('strong')?.textContent?.replace(':', '') || '',
      description: li.textContent?.replace(li.querySelector('strong')?.textContent || '', '').trim().substring(1).trim() || ''
  }));

  const expertiseIcons = [
      <TestTube2 className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      <BrainCircuit className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      <ShieldCheck className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      <Dna className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      <FlaskConical className="h-8 w-8 text-brand-600 dark:text-brand-400" />
  ];

  const keyPrinciples = [
    {
      icon: <Dna className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      title: "Bio (Biological)",
      description: "Utilizing chemistry, biology, and pharmacology to address molecular and physiological mechanisms of disease."
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      title: "Psycho (Psychological)",
      description: "Examining the role of thoughts, emotions, and stress, grounded in the science of Psychoneuroimmunology."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      title: "Spiritual (Theological)",
      description: "Addressing the need for meaning, purpose, and hope as a critical component of the healing process."
    },
    {
      icon: <Sigma className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      title: "Integrative Model",
      description: "Combining all aspects within the Biopsychosocial-Spiritual (BPS-S) framework for a truly holistic approach."
    }
  ];

  const glossaryTerms = ['multidisciplinary', 'pharma', 'drugDelivery', 'hormesis'];

  return (
    <Section containerClassName="max-w-4xl">
      <header className="text-center">
        <img src={author.avatarUrl} alt={author.name} className="h-40 w-40 rounded-full mx-auto shadow-lg object-cover object-top" />
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-extrabold">{author.name}</h1>
        <p className="mt-2 text-xl font-semibold text-accent-600 dark:text-accent-400">{author.title}</p>
        <div className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: shortBio }} />
      </header>

      <AnimatedSection as="div" className="mt-16 prose dark:prose-invert max-w-none text-lg text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: bioSections[0] }} />

      <AnimatedSection as="div" className="mt-20">
        <h2 className="font-display text-3xl font-extrabold text-center">A Multidisciplinary Foundation</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseList.map((item, index) => (
                <ExpertiseCard key={item.title} icon={expertiseIcons[index % expertiseIcons.length]} title={item.title} description={item.description} />
            ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="div" className="mt-20">
        <h2 className="font-display text-3xl font-extrabold text-center mb-12">Core Methodology</h2>
        <div className="relative">
            <TimelineItem icon={<Target size={20} />} title="Pharmacodynamics & Pharmacokinetics (ADMET)">
                {bioSections[2] + '<br/>' + bioSections[3]}
            </TimelineItem>
            <TimelineItem icon={<Route size={20} />} title="Drug Delivery Systems">
                {bioSections[4]}
            </TimelineItem>
            <TimelineItem icon={<Lightbulb size={20} />} title="Integrative Strategy" isLast>
                {bioSections[5]}
            </TimelineItem>
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="div" className="mt-20">
        <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold">The Biopsychosocial-Spiritual Framework</h2>
            <div className="mt-4 max-w-3xl mx-auto prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: bioSections[6] }} />
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPrinciples.map((principle, index) => (
            <div key={index} className="p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800 h-full text-center">
              <div className="flex-shrink-0 h-12 w-12 grid place-items-center rounded-xl bg-white dark:bg-slate-800 mx-auto shadow-sm">
                {principle.icon}
              </div>
              <h4 className="mt-4 font-semibold text-slate-800 dark:text-slate-100">{principle.title}</h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{principle.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="blockquote" className="mt-12 p-8 rounded-2xl bg-slate-100/60 dark:bg-slate-900/30 border-l-4 border-accent-500 text-xl italic text-slate-800 dark:text-slate-200 text-center">
        <div dangerouslySetInnerHTML={{ __html: bioSections[7] }} />
      </AnimatedSection>

      <AnimatedSection as="div" className="mt-20">
        <h2 className="font-display text-3xl font-extrabold mb-8 text-center">{t('authorPage.glossary.title')}</h2>
        <div className="space-y-4">
          {glossaryTerms.map(term => <GlossaryItem key={term} termKey={term} />)}
        </div>
      </AnimatedSection>
    </Section>
  );
}
