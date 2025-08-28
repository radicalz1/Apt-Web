
import { Search, ListFilter, X } from 'lucide-react';

interface FilterState {
    query: string;
    category: string;
    tag: string | null;
    sort: string;
}

interface BlogFiltersProps {
    filterState: FilterState;
    setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
    categories: string[];
    tags: string[];
    hasFilters: boolean;
    setCurrentPage: (page: number) => void;
}

export const BlogFilters = (props: BlogFiltersProps) => {
    const { filterState, setFilterState, categories, tags, hasFilters, setCurrentPage } = props;

    const handleFilterChange = (key: keyof FilterState, value: string | null) => {
        setFilterState(prev => ({ ...prev, [key]: value }));
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setFilterState({ query: '', category: 'all', tag: null, sort: 'newest' });
        setCurrentPage(1);
    };

    return (
        <div className="my-8 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/20 grid gap-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-[1fr_auto_auto] gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input type="search" placeholder="Search articles..." value={filterState.query} onChange={e => handleFilterChange('query', e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40" />
                </div>
                <div className="relative">
                    <ListFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <select value={filterState.sort} onChange={e => handleFilterChange('sort', e.target.value)} className="w-full appearance-none pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40">
                        <option value="newest">Sort: Newest</option>
                        <option value="oldest">Sort: Oldest</option>
                        <option value="popular">Sort: Popular</option>
                    </select>
                </div>
                {hasFilters && <button onClick={clearFilters} className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"><X size={16}/> Clear</button>}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2">
                {categories.map(cat => <button key={cat} onClick={() => handleFilterChange('category', cat)} className={`px-3 py-1.5 text-sm rounded-lg whitespace-nowrap ${filterState.category === cat ? 'bg-brand-600 text-white' : 'bg-white dark:bg-slate-800'}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>)}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 border-t border-slate-200 dark:border-slate-800 pt-4">
                <span className="text-sm font-semibold">Tags:</span>
                {tags.map(tag => <button key={tag} onClick={() => handleFilterChange('tag', tag)} className={`px-3 py-1.5 text-xs rounded-full ${filterState.tag === tag ? 'bg-accent-600 text-white' : 'bg-white dark:bg-slate-800'}`}># {tag}</button>)}
            </div>
        </div>
    );
};
