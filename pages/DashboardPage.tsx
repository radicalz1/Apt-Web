import React from 'react';
import { useAuth } from '../contexts/AuthContext.tsx';
import { Section } from '../components/common/Section.tsx';
import { Link } from 'react-router-dom';
import { FileText, ClipboardList } from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <Section>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold">
          Welcome, {user?.name || 'Client'}!
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          This is your personal health dashboard.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 text-left">
           <div className="p-6 rounded-3xl bg-slate-100/60 dark:bg-slate-900/30 border border-slate-200/70 dark:border-slate-800">
              <FileText className="h-8 w-8 text-brand-600 dark:text-brand-400" />
              <h2 className="text-xl font-bold mt-4">Your Health Report</h2>
              <p className="mt-2 text-slate-500 text-sm">
                Your personalized health report will be available here once it's ready.
              </p>
              <p className="text-sm text-slate-500 mt-4">
                Haven't completed your health assessment yet?
                <Link to="/questionnaire" className="text-accent-600 dark:text-accent-400 hover:underline ml-1">
                  Start now
                </Link>
              </p>
            </div>
           <div className="p-6 rounded-3xl bg-slate-100/60 dark:bg-slate-900/30 border border-slate-200/70 dark:border-slate-800">
              <ClipboardList className="h-8 w-8 text-accent-600 dark:text-accent-400" />
              <h2 className="text-xl font-bold mt-4">View Submissions</h2>
              <p className="mt-2 text-slate-500 text-sm">
                Access and review all the completed health assessment forms that have been submitted.
              </p>
               <Link to="/submissions" className="mt-4 inline-block text-sm font-semibold text-accent-600 dark:text-accent-400 hover:underline">
                  Go to Submissions &rarr;
                </Link>
            </div>
        </div>
      </div>
    </Section>
  );
}