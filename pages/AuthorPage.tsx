import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { authorsData } from '../data/authors.ts';
import { Section } from '../components/common/Section.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { Language } from '../types/index.ts';
import { ShieldAlert, Leaf, Dna, BrainCircuit, Users, Sparkles, ArrowRight, Lightbulb, Award, Target, Recycle, Zap } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection.tsx';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <AnimatedSection as="div" className="text-center prose dark:prose-invert max-w-none">
    <div className="inline-block relative py-4">
      {children}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
    </div>
  </AnimatedSection>
);

const TwoPathsCard = ({ icon, content }: { icon: React.ReactNode, content: string }) => (
  <div className="p-8 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800 h-full backdrop-blur-sm">
    <div className="flex-shrink-0 h-14 w-14 grid place-items-center rounded-xl bg-white dark:bg-slate-800 shadow-lg mb-4">
      {icon}
    </div>
    <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

const PhilosophyCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800 h-full text-center backdrop-blur-sm transform transition-transform duration-300 hover:-translate-y-2">
    <div className="flex-shrink-0 h-12 w-12 grid place-items-center rounded-xl bg-white dark:bg-slate-800 mx-auto shadow-lg">
      {icon}
    </div>
    <h4 className="mt-4 font-semibold text-slate-800 dark:text-slate-100">{title}</h4>
    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

const KeyConceptCard = ({ icon, content }: { icon: React.ReactElement, content: string }) => (
  <div className="relative p-6 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800 overflow-hidden backdrop-blur-sm">
    <div className="relative z-10 prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    <div className="absolute -bottom-8 -right-4 text-slate-200/40 dark:text-slate-800/50 z-0">
      {/* FIX: Use a generic parameter with React.cloneElement to specify props type as 'any', resolving a TypeScript error where it fails to infer the element's props. */}
      {React.cloneElement<any>(icon, { size: 96, strokeWidth: 1.5 })}
    </div>
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
  const [personalIntro, twoPathsRaw, foundationRaw, advantage, philosophyRaw, record, cta] = sections;

  const twoPathsParts = twoPathsRaw.split('<!--SUBSECTION-->');
  const twoPathsIntro = twoPathsParts.shift() || '';
  const path1 = twoPathsParts[0] || '';
  const path2 = twoPathsParts[1] || '';

  const foundationParts = foundationRaw.split('<!--CONCEPT-->');
  const foundationIntro = foundationParts.shift() || '';
  const concepts = foundationParts.map(c => c.trim());
  
  const philosophyIntro = philosophyRaw || '';
  const philosophyItems = [
    { title: 'Bio (The Body)', description: 'Addressed with her full scientific arsenal.' },
    { title: 'Psycho (The Mind)', description: 'Recognizing the powerful connection between your thoughts, emotions, and physical health.' },
    { title: 'Social (The Environment)', description: 'Understanding the impact of your family, work, and community on your well-being.' },
    { title: 'Spiritual (The Purpose)', description: "Drawing from her Master's in Theology, she provides a space to address the deep human need for meaning and hope—the fuel that powers every healing journey." }
  ];

  const conceptIcons = [
    <Target size={24} className="text-brand-600 dark:text-brand-400" />,
    <Recycle size={24} className="text-brand-600 dark:text-brand-400" />,
    <Zap size={24} className="text-brand-600 dark:text-brand-400" />,
  ];

  const philosophyIcons = [
    <Dna size={24} className="text-brand-600 dark:text-brand-400" />,
    <BrainCircuit size={24} className="text-brand-600 dark:text-brand-400" />,
    <Users size={24} className="text-brand-600 dark:text-brand-400" />,
    <Sparkles size={24} className="text-brand-600 dark:text-brand-400" />,
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      <Section containerClassName="max-w-4xl">
        <header className="text-center relative pt-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-48 bg-gradient-to-t from-brand-100/50 to-transparent dark:from-brand-900/30 dark:to-transparent rounded-full blur-3xl -z-0" />
          <img src={author.avatarUrl} alt={author.name} className="relative z-10 h-40 w-40 rounded-full mx-auto shadow-2xl object-cover object-top ring-4 ring-white dark:ring-slate-900" />
          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">{author.name}</h1>
          <p className="mt-2 text-xl font-semibold bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 text-transparent bg-clip-text">{author.title}</p>
          <div className="mt-4 max-w-2xl mx-auto text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: bio }} />
        </header>
        
        <AnimatedSection as="div" className="mt-16 prose dark:prose-invert max-w-none text-lg text-center" dangerouslySetInnerHTML={{ __html: personalIntro }} />
        
        <div className="mt-24">
          <SectionTitle><div dangerouslySetInnerHTML={{ __html: twoPathsIntro.match(/<h3>(.*?)<\/h3>/)?.[0] || '' }} /></SectionTitle>
          <AnimatedSection as="div" className="mt-4 text-center prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: twoPathsIntro.match(/<p>(.*?)<\/p>/s)?.[0] || '' }} />
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <TwoPathsCard icon={<ShieldAlert size={32} className="text-red-500" />} content={path1} />
            <TwoPathsCard icon={<Leaf size={32} className="text-green-500" />} content={path2} />
          </div>
        </div>
        
        <div className="mt-24">
           <SectionTitle><div dangerouslySetInnerHTML={{ __html: foundationIntro.match(/<h3>(.*?)<\/h3>/)?.[0] || '' }} /></SectionTitle>
           <AnimatedSection as="div" className="mt-4 text-center prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: foundationIntro.match(/<p>(.*?)<\/p>/s)?.[0] || '' }} />
           <div className="mt-8 grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {concepts.map((concept, index) => (
                <KeyConceptCard key={index} icon={conceptIcons[index]} content={concept} />
              ))}
           </div>
        </div>
        
        <AnimatedSection as="div" className="mt-24 relative p-8 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800 backdrop-blur-sm">
            <div className="absolute top-4 left-4 h-12 w-12 grid place-items-center rounded-xl bg-white dark:bg-slate-800 shadow-lg">
                <Lightbulb size={24} className="text-accent-500" />
            </div>
            <div className="prose dark:prose-invert max-w-none ml-16" dangerouslySetInnerHTML={{ __html: advantage }} />
        </AnimatedSection>

        <div className="mt-24">
          <SectionTitle><div dangerouslySetInnerHTML={{ __html: philosophyIntro.match(/<h3>(.*?)<\/h3>/)?.[0] || '' }}/></SectionTitle>
          <AnimatedSection as="div" className="mt-4 text-center prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: philosophyIntro.match(/<p>(.*?)<\/p>/s)?.[0] || '' }} />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {philosophyItems.map((item, index) => (
              <PhilosophyCard key={item.title} icon={philosophyIcons[index]} title={item.title} description={item.description} />
            ))}
          </div>
        </div>

        <AnimatedSection as="div" className="mt-24 relative p-8 rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 dark:from-brand-900/20 dark:to-accent-900/20">
            <div className="absolute top-4 left-4 h-12 w-12 grid place-items-center rounded-xl bg-white dark:bg-slate-800 shadow-lg">
                <Award size={24} className="text-brand-500" />
            </div>
            <div className="prose dark:prose-invert max-w-none ml-16" dangerouslySetInnerHTML={{ __html: record }} />
        </AnimatedSection>
        
        <div className="mt-24 py-12 px-8 rounded-2xl bg-slate-100 dark:bg-slate-900">
          <AnimatedSection as="div" className="text-center prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: cta }} />
            <Link to="/#konsultasi" className="mt-6 group primary-cta inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold shadow-soft hover:shadow-lg transition-all transform hover:-translate-y-1 no-underline">
              Book a Discovery Call
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>

      </Section>
    </div>
  );
}