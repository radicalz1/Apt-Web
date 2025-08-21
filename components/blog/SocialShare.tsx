import { Twitter, Linkedin, Copy, Mail } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext.tsx';

export const SocialShare = ({ title }: { title: string }) => {
  const url = window.location.href;
  const { addToast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      addToast('Link copied to clipboard!', 'success');
    }).catch(err => {
      addToast('Failed to copy link.', 'error');
    });
  };

  const shareLinks = [
    { 
      label: 'Share on Twitter', 
      icon: <Twitter size={18} />, 
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}` 
    },
    { 
      label: 'Share on LinkedIn', 
      icon: <Linkedin size={18} />, 
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}` 
    },
    {
      label: 'Share via Email',
      icon: <Mail size={18} />,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`
    }
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium mr-2">Share:</span>
      {shareLinks.map(link => (
        <a 
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {link.icon}
        </a>
      ))}
      <button 
        onClick={copyToClipboard}
        aria-label="Copy link"
        className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <Copy size={18} />
      </button>
    </div>
  );
};