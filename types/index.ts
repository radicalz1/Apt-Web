export type Product = {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  categoryKey: 'longevity' | 'metabolik' | 'imun';
  imageUrl: string;
};

export interface CartItem {
  id: number;
  name:string;
  price: number;
  qty: number;
  imageUrl: string;
}

export interface ArticleAuthor {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
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

export type Theme = 'light' | 'dark' | 'nature-light' | 'nature-dark' | 'high-contrast';
export type Language = 'id' | 'en';
export type Policy = 'terms' | 'privacy' | 'medical';

export type ToastMessage = {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
};

export interface Poll {
    id: string;
    question: string;
    options: { id: string; text: string; }[];
}