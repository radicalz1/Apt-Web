import React, { useState, useEffect } from 'react';
import { Section } from '../components/common/Section.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { Eye } from 'lucide-react';
import { formatDate } from '../utils/date.ts';

const SUBMISSIONS_KEY = 'healthQuestionnaireSubmissions';

export default function SubmissionsPage() {
  useTitle("Health Assessment Submissions");
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null);

  useEffect(() => {
    try {
      const storedSubmissions = JSON.parse(localStorage.getItem(SUBMISSIONS_KEY) || '[]');
      setSubmissions(storedSubmissions.sort((a: any, b: any) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()));
    } catch (error) {
      console.error("Failed to load submissions", error);
    }
  }, []);

  const SubmissionModal = ({ submission, onClose }: { submission: any, onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="p-4 border-b border-slate-200 dark:border-slate-800">
          <h3 className="font-semibold">Submission Details</h3>
        </header>
        <div className="p-4 overflow-auto">
          <pre className="text-xs whitespace-pre-wrap break-all bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            {JSON.stringify(submission, null, 2)}
          </pre>
        </div>
        <footer className="p-4 border-t border-slate-200 dark:border-slate-800 text-right">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700">Close</button>
        </footer>
      </div>
    </div>
  );

  return (
    <Section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display text-4xl font-extrabold">Submissions</h1>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-300">
              <tr>
                <th scope="col" className="px-6 py-3">Client Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Date Submitted</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.length > 0 ? submissions.map(sub => (
                <tr key={sub.id} className="border-b dark:border-slate-800 odd:bg-white dark:odd:bg-slate-900 even:bg-slate-50/50 dark:even:bg-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-700/50">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{sub.basicInfo?.fullName || 'N/A'}</td>
                  <td className="px-6 py-4">{sub.submittedBy}</td>
                  <td className="px-6 py-4">{formatDate(sub.submittedAt, 'long')}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => setSelectedSubmission(sub)} className="text-accent-600 hover:underline flex items-center gap-1">
                      <Eye size={16} /> View
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="text-center py-10">No submissions yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {selectedSubmission && <SubmissionModal submission={selectedSubmission} onClose={() => setSelectedSubmission(null)} />}
    </Section>
  );
}