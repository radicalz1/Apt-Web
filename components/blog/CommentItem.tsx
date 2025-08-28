import { Comment } from '../../types/index.ts';
import { formatDate } from '../../utils/date.ts';
import { CommentForm } from './CommentForm.tsx';
import { useState } from 'react';

interface CommentItemProps {
  comment: Comment;
  allComments: Comment[];
  onAddComment: (text: string, parentId: number | null) => void;
}

export const CommentItem = ({ comment, allComments, onAddComment }: CommentItemProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const replies = allComments.filter(c => c.parentId === comment.id);
  
  const handleReplySubmit = (text: string) => {
    onAddComment(text, comment.id);
    setIsReplying(false);
  };

  return (
    <div className="flex gap-4">
      <img src={comment.avatarUrl} alt={comment.author} className="h-10 w-10 rounded-full flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{comment.author}</span>
          <span className="text-xs text-slate-500">{formatDate(comment.date)}</span>
        </div>
        <p className="mt-1 text-slate-700 dark:text-slate-300">{comment.text}</p>
        <button onClick={() => setIsReplying(!isReplying)} className="mt-2 text-xs font-semibold text-accent-600 dark:text-accent-400">Reply</button>
        {isReplying && <div className="mt-2"><CommentForm onSubmit={handleReplySubmit} isReply /></div>}
        <div className="mt-4 space-y-4">
          {replies.map(reply => (
            <div key={reply.id} className="comment-reply">
              <CommentItem comment={reply} allComments={allComments} onAddComment={onAddComment} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};