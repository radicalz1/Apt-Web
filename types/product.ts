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
