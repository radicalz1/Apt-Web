interface Heading {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  activeId: string | null;
}

export const TableOfContents = ({ headings, activeId }: TableOfContentsProps) => {
  if (headings.length === 0) return null;

  return (
    <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/40">
      <h3 className="font-semibold mb-3">On this page</h3>
      <ul className="space-y-2">
        {headings.map(h => (
          <li key={h.id}>
            <a 
              href={`#${h.id}`}
              className={`block text-sm text-slate-600 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-200 ${activeId === h.id ? 'toc-link-active' : ''}`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};