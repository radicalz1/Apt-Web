import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient.ts';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          id,
          name,
          role,
          users (
            email,
            created_at
          )
        `);

      if (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users.');
      } else {
        setUsers(data || []);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl font-bold">User Management</h1>
      
      <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-300">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Joined Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} className="text-center p-6">Loading users...</td></tr>
            ) : error ? (
              <tr><td colSpan={4} className="text-center p-6 text-red-500">{error}</td></tr>
            ) : users.length > 0 ? users.map(user => (
              <tr key={user.id} className="border-b dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{user.name || 'N/A'}</td>
                <td className="px-6 py-4">{user.users.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${user.role === 'super_admin' ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">{new Date(user.users.created_at).toLocaleDateString()}</td>
              </tr>
            )) : (
              <tr><td colSpan={4} className="text-center p-10">No users found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}