import React, { useState, useEffect, useMemo } from 'react';
import { Eye, Search } from 'lucide-react';
import { formatDate } from '../../utils/date.ts';
import { supabase } from '../../utils/supabaseClient.ts';
import { useLocation } from 'react-router-dom';
import { Pagination } from '../../components/common/Pagination.tsx';

const ITEMS_PER_PAGE = 10;

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.search) {
      setSearchTerm(location.state.search);
    }
  }, [location.state]);
  
  useEffect(() => {
    const fetchSubmissions = async () => {
      setLoading(true);
      setError(null);
      const from = (currentPage - 1) * ITEMS_PER_PAGE;
      const to = from + ITEMS_PER_PAGE - 1;

      let query = supabase
        .from('submissions')
        .select('*, profiles(name)', { count: 'exact' });

      if (searchTerm) {
        query = query.or(`submitted_by.ilike.%${searchTerm}%,profiles.name.ilike.%${searchTerm}%`);
      }
      
      query = query.order('submitted_at', { ascending: false }).range(from, to);

      const { data, error, count } = await query;

      if (error) {
        console.error('Error fetching submissions:', error);
        setError('Failed to fetch submissions.');
      } else {
        setSubmissions(data || []);
        setTotalCount(count || 0);
      }
      setLoading(false);
    };

    const searchDebounce = setTimeout(() => {
      fetchSubmissions();
    }, 300);

    return () => clearTimeout(searchDebounce);
  }, [currentPage, searchTerm]);

  const SubmissionModal = ({ submission, onClose }: { submission: any, onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-semibold">Submission Details for {submission.basicInfo?.fullName || 'N/A'}</h3>
          <button onClick={onClose} className="px-3 py-1 rounded-lg border border-slate-300 dark:border-slate-700 text-sm">Close</button>
        </header>
        <div className="p-4 overflow-auto">
          <pre className="text-xs whitespace-pre-wrap break-words bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">{JSON.stringify(submission, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl font-bold">All Submissions</h1>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input type="search" placeholder="Search by name or email..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full max-w-md pl-10 pr-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900" />
      </div>

      <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-300">
            <tr>
              <th className="px-6 py-3">Client Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Date Submitted</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} className="text-center p-6">Loading...</td></tr>
            ) : error ? (
              <tr><td colSpan={4} className="text-center p-6 text-red-500">{error}</td></tr>
            ) : submissions.length > 0 ? submissions.map(sub => (
              <tr key={sub.id} className="border-b dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{sub.form_data?.basicInfo?.fullName || 'N/A'}</td>
                <td className="px-6 py-4">{sub.submitted_by}</td>
                <td className="px-6 py-4">{formatDate(sub.submitted_at, 'long')}</td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => setSelectedSubmission(sub.form_data)} className="text-accent-600 hover:underline flex items-center gap-1">
                    <Eye size={16} /> View
                  </button>
                </td>
              </tr>
            )) : (
              <tr><td colSpan={4} className="text-center p-10">No submissions found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(totalCount / ITEMS_PER_PAGE)} onPageChange={setCurrentPage} />
      {selectedSubmission && <SubmissionModal submission={selectedSubmission} onClose={() => setSelectedSubmission(null)} />}
    </div>
  );
}