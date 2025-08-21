import { useState, useMemo } from 'react';
import { commentsData } from '../../data/comments.ts';
import { Comment } from '../../types/index.ts';
import { formatDate } from '../../utils/date.ts';

const CommentItem = ({ comment, allComments, onReply }: { comment: Comment; allComments: Comment[]; onReply: (id: number) => void }) => {
  const replies = allComments.filter(c => c.parentId === comment.id);
  
  return (
    <div className="flex gap-4">
      <img src={comment.avatarUrl} alt={comment.author} className="h-10 w-10 rounded-full flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{comment.author}</span>
          <span className="text-xs text-slate-500">{formatDate(comment.date)}</span>
        </div>
        <p className="mt-1 text-slate-700 dark:text-slate-300">{comment.text}</p>
        <button onClick={() => onReply(comment.id)} className="mt-2 text-xs font-semibold text-accent-600 dark:text-accent-400">Reply</button>
        <div className="mt-4 space-y-4">
          {replies.map(reply => (
            <div key={reply.id} className="comment-reply">
              <CommentItem comment={reply} allComments={allComments} onReply={onReply} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CommentsSection = ({ articleSlug }: { articleSlug: string }) => {
  const [comments, setComments] = useState<Comment[]>(() => 
    commentsData.filter(c => c.articleSlug === articleSlug)
  );
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const rootComments = useMemo(() => comments.filter(c => !c.parentId), [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentToAdd: Comment = {
      id: Date.now(),
      articleSlug,
      author: 'Guest User',
      avatarUrl: `https://i.pravatar.cc/150?u=guest${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      text: newComment,
      parentId: replyingTo,
      likes: 0,
    };
    setComments(prev => [commentToAdd, ...prev]);
    setNewComment('');
    setReplyingTo(null);
  };

  return (
    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 no-print">
      <h3 className="font-display text-2xl font-bold">{comments.length} Comments</h3>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
        <textarea
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          rows={3}
          placeholder={replyingTo ? `Replying to comment...` : "Write a comment..."}
          className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40"
        ></textarea>
        <div className="flex items-center gap-2">
          <button type="submit" className="px-5 py-2 rounded-xl text-white bg-brand-600">Post Comment</button>
          {replyingTo && <button type="button" onClick={() => setReplyingTo(null)} className="px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700">Cancel Reply</button>}
        </div>
      </form>
      <div className="mt-8 space-y-6">
        {rootComments.map(comment => (
          <CommentItem key={comment.id} comment={comment} allComments={comments} onReply={setReplyingTo} />
        ))}
      </div>
    </div>
  );
};