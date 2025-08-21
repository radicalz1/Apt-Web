import React from 'react';
import { useToast } from '../../contexts/ToastContext.tsx';
import { ToastMessage } from '../../types/index.ts';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const icons = {
  success: <CheckCircle className="text-green-500" size={20} />,
  error: <XCircle className="text-red-500" size={20} />,
  info: <Info className="text-blue-500" size={20} />,
};

const Toast = ({ toast, onRemove }: { toast: ToastMessage, onRemove: (id: number) => void }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, 5000);
    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  return (
    <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg rounded-xl flex items-center gap-3 p-4 animate-fade-in-up">
      {icons[toast.type]}
      <p className="text-sm font-medium flex-1">{toast.message}</p>
      <button onClick={() => onRemove(toast.id)} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">
        <X size={16} />
      </button>
    </div>
  );
};


export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-80 space-y-2">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
};