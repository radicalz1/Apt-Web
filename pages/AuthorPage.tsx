import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { authorsData } from '../data/authors.ts';
import { Section } from '../components/common/Section.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { Language } from '../types/index.ts';
import { ShieldAlert, Leaf, Dna, BrainCircuit, Users, Sparkles, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection.tsx';

const TwoPathsCard = ({ icon, content }: { icon: React.ReactNode, content: string }) => (
  <div className="p-8 rounded-2xl bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800 h-full">
    <div className="flex-shrink-0 h-14 w-14 grid place-items-center rounded-xl bg-white dark:bg-slate-800 shadow-sm mb-4">
      {icon}
    </div>
    <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

const PhilosophyCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800 h-full">
    <div className="flex-shrink-0 h-12 w-12 grid place-items-center rounded-xl bg-white dark:bg-slate-800 mx-auto shadow-sm">
      {icon}
    </div>
    <h4 className="mt-4 font-semibold text-slate-800 dark:text-slate-100 text-center">{title}</h4>
    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 text-center">{description}</p>
  </div>
);

export default function AuthorPage() {
  const { authorId } = useParams();
  const { language } = useLanguage();
  
  const author = authorsData.find(a => a.id === authorId);

  useTitle(author ? `${author.name} - ${author.title}` : 'Author Not Found');

  if (!author) {
    return <Navigate to="/404" replace />;
  }
  
  const bio = author.bio[language as Language] || author.bio['en'];
  const fullBio = author.fullBio[language as Language] || author.fullBio['en'];

  const sections = fullBio.split('<!--SECTION-->');
  const [personalIntro, twoPathsRaw, foundation, advantage, philosophy, record, cta] = sections;

  const twoPathsParts = twoPathsRaw.split('<!--SUBSECTION-->');
  const twoPathsIntro = twoPathsParts[0];
  const path1 = twoPathsParts[1];
  const path2 = twoPathsParts[2];
  
  const philosophyParts = philosophy.split('<ul>');
  const philosophyIntro = philosophyParts[0];
  const philosophyList = new DOMParser().parseFromString(`<ul>${philosophyParts[1]}`, 'text/html');
  const philosophyItems = Array.from(philosophyList.querySelectorAll('li')).map(li => {
    const strong = li.querySelector('strong')?.textContent || '';
    const text = li.textContent?.replace(strong, '').substring(2) || '';
    return { title: strong.replace(':', ''), description: text };
  });

  const philosophyIcons = [
    <Dna size={24} className="text-brand-600 dark:text-brand-400" />,
    <BrainCircuit size={24} className="text-brand-600 dark:text-brand-400" />,
    <Users size={24} className="text-brand-600 dark:text-brand-400" />,
    <Sparkles size={24} className="text-brand-600 dark:text-brand-400" />,
  ];

  return (
    <Section containerClassName="max-w-4xl">
      <header className="text-center">
        <img src={author.avatarUrl} alt={author.name} className="h-40 w-40 rounded-full mx-auto shadow-lg object-cover object-top" />
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-extrabold">{author.name}</h1>
        <p className="mt-2 text-xl font-semibold text-accent-600 dark:text-accent-400">{author.title}</p>
        <div className="mt-4 max-w-2xl mx-auto text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: bio }} />
      </header>
      
      <AnimatedSection as="div" className="mt-16 prose dark:prose-invert max-w-none text-lg" dangerouslySetInnerHTML={{ __html: personalIntro }} />
      
      <AnimatedSection as="div" className="mt-20">
        <div className="text-center prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: twoPathsIntro }}/>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <TwoPathsCard icon={<ShieldAlert size={32} className="text-red-500" />} content={path1} />
          <TwoPathsCard icon={<Leaf size={32} className="text-green-500" />} content={path2} />
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="div" className="mt-20 prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: foundation }} />
      
      <AnimatedSection as="blockquote" className="mt-12 p-8 rounded-2xl bg-slate-100/60 dark:bg-slate-900/30 border-l-4 border-accent-500 prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: advantage }} />

      <AnimatedSection as="div" className="mt-20">
        <div className="text-center prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: philosophyIntro }} />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {philosophyItems.map((item, index) => (
            <PhilosophyCard key={item.title} icon={philosophyIcons[index]} title={item.title} description={item.description} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="blockquote" className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 dark:from-brand-900/20 dark:to-accent-900/20 prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: record }} />
      
      <AnimatedSection as="div" className="mt-12 text-center prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: cta }} />
        <Link to="/#konsultasi" className="mt-6 group primary-cta inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold shadow-soft hover:shadow-lg transition-all transform hover:-translate-y-1 no-underline">
          Book a Discovery Call
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </AnimatedSection>

    </Section>
  );
}
