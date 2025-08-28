import { Link } from 'react-router-dom';

export const BlogCardTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {tags.map(tag => (
        <Link key={tag} to={`/blog/tag/${tag}`} className="text-xs px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600">
          # {tag}
        </Link>
      ))}
    </div>
  );
};