import React from 'react';
import { useAuth } from '../../contexts/AuthContext.tsx';
import { LogOut } from 'lucide-react';
import { ThemeSelector } from '../common/ThemeSelector.tsx';

export const AdminHeader = () => {
    const { user, logout } = useAuth();
    
    return (
        <header className="h-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex-shrink-0 flex items-center justify-end px-6">
            <div className="flex items-center gap-4">
                <ThemeSelector />
                <div className="text-sm text-right">
                    <div className="font-semibold">{user?.name}</div>
                    <div className="text-xs text-slate-500 capitalize">{user?.role?.replace('_', ' ')}</div>
                </div>
                <button onClick={logout} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Logout">
                    <LogOut size={20} />
                </button>
            </div>
        </header>
    );
};