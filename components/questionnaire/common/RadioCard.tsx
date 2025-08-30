import React from 'react';

interface RadioCardProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
}

const RadioCard: React.FC<RadioCardProps> = ({ id, name, value, checked, onChange, label }) => {
  return (
    <label
      htmlFor={id}
      className={`block p-4 border-2 rounded-xl cursor-pointer transition-all ${
        checked
          ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20 shadow-sm'
          : 'border-slate-300 dark:border-slate-700 hover:border-brand-400'
      }`}
    >
      <div className="flex items-center">
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => onChange(e.target.value)}
          className="h-4 w-4 border-slate-300 text-brand-600 focus:ring-brand-500"
        />
        <span className="ml-3 font-medium text-slate-800 dark:text-slate-200">{label}</span>
      </div>
    </label>
  );
};

export default RadioCard;
