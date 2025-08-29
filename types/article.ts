export interface ArticleAuthor {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  bio: string | { [key: string]: string };
  fullBio: string | { [key: string]: string };
  profileLink: string;
}

export interface Article {
  slug: string;
  title: string;
  desc: string;
  publishDate: string;
  tags: string[];
  featured?: boolean;
  claps: number;
  views: number;
  trending: 'up' | 'down' | 'stable';
  qualityScore?: 'Quick Read' | 'Deep Dive' | 'Evidence-Based';
  imageUrl: string;
  content: string;
  category: 'Metabolik' | 'Imun' | 'Longevity' | 'General';
  categoryKey: 'metabolik' | 'imun' | 'longevity' | 'general';
  authorId: string;
  series?: {
    id: string;
    title: string;
    order: number;
  };
  keyTakeaways: string[];
  footnotes?: Record<string, string>;
}

export interface Comment {
  id: number;
  articleSlug: string;
  author: string;
  avatarUrl: string;
  date: string;
  text: string;
  parentId?: number | null;
  likes: number;
}

export type ArticleTranslation = Pick<Article, 'title' | 'desc' | 'tags' | 'qualityScore' | 'content' | 'category' | 'keyTakeaways' | 'footnotes'> & {
  series?: Pick<Article['series'], 'title'>
};

export interface ArticlePost {
  slug: string;
  publishDate: string;
  categoryKey: Article['categoryKey'];
  authorId: string;
  featured?: boolean;
  claps: number;
  imageUrl: string;
  series?: { id: string; order: number; };
  translations: {
    id: ArticleTranslation;
    en: ArticleTranslation;
  }
}
