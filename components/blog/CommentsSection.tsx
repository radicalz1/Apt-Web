import { useState, useMemo } from 'react';
import { commentsData } from '../../data/comments.ts';
import { Comment } from '../../types/index.ts';
import { CommentItem } from './CommentItem.tsx';
import { CommentForm } from './CommentForm.tsx';

export const CommentsSection = ({ articleSlug }: { articleSlug: string }) => {
  const [comments, setComments] = useState<Comment[]>(() => 
    commentsData.filter(c => c.articleSlug === articleSlug)
  );
  const rootComments = useMemo(() => comments.filter(c => !c.parentId), [comments]);

  const handleAddComment = (text: string, parentId: number | null) => {
    const commentToAdd: Comment = {
      id: Date.now(),
      articleSlug,
      author: 'Guest User',
      avatarUrl: `https://i.pravatar.cc/150?u=guest${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      text,
      parentId,
      likes: 0,
    };
    setComments(prev => [commentToAdd, ...prev]);
  };

  return (
    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 no-print">
      <h3 className="font-display text-2xl font-bold">{comments.length} Comments</h3>
      <CommentForm onSubmit={handleAddComment} />
      <div className="mt-8 space-y-6">
        {rootComments.map(comment => (
          <CommentItem key={comment.id} comment={comment} allComments={comments} onAddComment={handleAddComment} />
        ))}
      </div>
    </div>
  );
};