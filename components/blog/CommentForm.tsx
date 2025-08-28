import { useState } from 'react';

interface CommentFormProps {
  onSubmit: (text: string, parentId?: number | null) => void;
  isReply?: boolean;
}

export const CommentForm = ({ onSubmit, isReply = false }: CommentFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        rows={isReply ? 2 : 3}
        placeholder={isReply ? "Write a reply..." : "Write a comment..."}
        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40"
      ></textarea>
      <div className="flex items-center gap-2">
        <button type="submit" className="px-5 py-2 rounded-xl text-white bg-brand-600">
          {isReply ? 'Post Reply' : 'Post Comment'}
        </button>
      </div>
    </form>
  );
};