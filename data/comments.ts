import { Comment } from '../types/index.ts';

export const commentsData: Comment[] = [
  {
    id: 1,
    articleSlug: 'menurunkan-insulin-basal-tanpa-kelaparan',
    author: 'Budi S.',
    avatarUrl: 'https://i.pravatar.cc/150?u=budi',
    date: '2024-07-16',
    text: 'Artikel yang sangat mencerahkan! Saya sudah mencoba fokus pada protein dan serat, dan benar-benar terasa bedanya di tingkat energi saya.',
    parentId: null,
    likes: 12,
  },
  {
    id: 4,
    articleSlug: 'menurunkan-insulin-basal-tanpa-kelaparan',
    author: 'Apt. Hanna J., M.Th., S.Farm.',
    avatarUrl: '/apt_hanna_j.png',
    date: '2024-07-16',
    text: 'Senang mendengarnya, Budi! Konsistensi adalah kunci. Terus pertahankan pola makan tersebut.',
    parentId: 1,
    likes: 5,
  },
  {
    id: 2,
    articleSlug: 'menurunkan-insulin-basal-tanpa-kelaparan',
    author: 'Sarah K.',
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah',
    date: '2024-07-17',
    text: 'Tips puasa fleksibelnya sangat membantu. Saya tidak merasa tertekan dengan jadwal yang kaku. Terima kasih, Dok!',
    parentId: null,
    likes: 8,
  },
  {
    id: 3,
    articleSlug: 'vitamin-d-dosis-status-keamanan',
    author: 'John D.',
    avatarUrl: 'https://i.pravatar.cc/150?u=john',
    date: '2024-07-11',
    text: 'Penjelasan tentang Vitamin K2 sangat penting. Banyak yang tidak tahu soal ini. Great info!',
    parentId: null,
    likes: 15,
  }
];
