import React from 'react';

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  description?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, name, description, required, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        {...props}
        className="mt-1 block w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/40 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
      {description && <p className="mt-1 text-xs text-slate-500">{description}</p>}
    </div>
  );
};

export default TextareaField;
