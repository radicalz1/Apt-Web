import React, { useState, useEffect } from 'react';
import { StatCard } from '../../components/admin/StatCard.tsx';
import { Users, FileText, BarChart2 } from 'lucide-react';
import { supabase } from '../../utils/supabaseClient.ts';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/date.ts';

export default function AdminDashboardPage() {
    const [stats, setStats] = useState({ users: 0, submissions: 0 });
    const [recentSubmissions, setRecentSubmissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            setLoading(true);
            try {
                const { count: userCount, error: userError } = await supabase
                    .from('profiles')
                    .select('*', { count: 'exact', head: true });

                const { count: submissionCount, error: submissionError } = await supabase
                    .from('submissions')
                    .select('*', { count: 'exact', head: true });
                
                const { data: recentData, error: recentError } = await supabase
                    .from('submissions')
                    .select('id, submitted_at, submitted_by, form_data')
                    .order('submitted_at', { ascending: false })
                    .limit(5);

                if (userError || submissionError || recentError) {
                    console.error('Error fetching dashboard data:', userError || submissionError || recentError);
                } else {
                    setStats({ users: userCount || 0, submissions: submissionCount || 0 });
                    setRecentSubmissions(recentData || []);
                }
            } catch (error) {
                console.error("Client-side error fetching stats:", error);
            }
            setLoading(false);
        };
        fetchStats();
    }, []);
    
    return (
        <div className="space-y-8">
            <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard title="Total Users" value={loading ? '...' : stats.users} icon={<Users size={24} />} />
                <StatCard title="Total Submissions" value={loading ? '...' : stats.submissions} icon={<FileText size={24} />} />
                <StatCard title="Analytics" value="Coming Soon" icon={<BarChart2 size={24} />} />
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4">Recent Submissions</h2>
                <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-300">
                            <tr>
                                <th className="px-6 py-3">Client Name</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan={4} className="text-center p-6">Loading...</td></tr>
                            ) : recentSubmissions.length > 0 ? recentSubmissions.map(sub => (
                                <tr key={sub.id} className="border-b dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{sub.form_data?.basicInfo?.fullName || 'N/A'}</td>
                                    <td className="px-6 py-4">{sub.submitted_by}</td>
                                    <td className="px-6 py-4">{formatDate(sub.submitted_at, 'long')}</td>
                                    <td className="px-6 py-4 text-right">
                                        <Link to="/admin/submissions" state={{ search: sub.submitted_by }} className="font-medium text-accent-600 dark:text-accent-400 hover:underline">View</Link>
                                    </td>
                                </tr>
                            )) : (
                                <tr><td colSpan={4} className="text-center p-6">No submissions yet.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}