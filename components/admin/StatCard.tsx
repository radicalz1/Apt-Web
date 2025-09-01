import React from 'react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
    return (
        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-6">
            <div className="h-12 w-12 rounded-full grid place-items-center bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 flex-shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-sm text-slate-500">{title}</p>
                <p className="text-3xl font-bold">{value}</p>
            </div>
        </div>
    );
};