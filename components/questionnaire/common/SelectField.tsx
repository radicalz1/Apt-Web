import React from 'react';

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, options, required, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={name}
        name={name}
        {...props}
        className="mt-1 block w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/40 focus:outline-none focus:ring-2 focus:ring-brand-500"
      >
        <option value="">Select...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
