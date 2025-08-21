import { Link } from 'react-router-dom';
import { Section } from '../common/Section.tsx';
import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { useArticles } from '../../hooks/useArticles.ts';
import { BlogCard } from '../blog/BlogCard.tsx';

export const BlogSection = () => {
  const { t } = useTranslation();
  const allArticles = useArticles();
  const articles = allArticles.slice(0, 3); // Show only first 3 articles on homepage

  return (
    <Section id="blog">
      <SectionHeader title={t('blog.title')} description={t('blog.description')}>
        <Link to="/blog" className="text-sm text-accent-700 dark:text-accent-300 hover:underline">{t('blog.viewAll')}</Link>
      </SectionHeader>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map(article => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  );
};
