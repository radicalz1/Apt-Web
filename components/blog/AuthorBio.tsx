import { ArticleAuthor } from '../../types/index.ts';

export const AuthorBio = ({ author }: { author: ArticleAuthor }) => {
  return (
    <div className="mt-12 flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50 dark:bg-slate-900">
      <img src={author.avatarUrl} alt={author.name} className="h-16 w-16 rounded-full" />
      <div>
        <h4 className="font-semibold">{author.name}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-300">{author.title}</p>
      </div>
    </div>
  );
};