import { useToast } from '../../contexts/ToastContext.tsx';
import { Toast } from './Toast.tsx';

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