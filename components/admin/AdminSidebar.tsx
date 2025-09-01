import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, ArrowLeft } from 'lucide-react';
import { Logo } from '../common/Logo.tsx';

const navItems = [
  { to: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
  { to: '/admin/submissions', icon: <FileText size={20} />, label: 'Submissions' },
  { to: '/admin/users', icon: <Users size={20} />, label: 'Users' },
];

export const AdminSidebar = () => {
  const activeLinkClass = 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200';
  const inactiveLinkClass = 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-slate-200 dark:border-slate-800 px-4">
        <Logo />
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/admin'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? activeLinkClass : inactiveLinkClass}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-4 border-t border-slate-200 dark:border-slate-800">
        <NavLink to="/" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${inactiveLinkClass}`}>
          <ArrowLeft size={20} />
          <span>Back to Main Site</span>
        </NavLink>
      </div>
    </aside>
  );
};