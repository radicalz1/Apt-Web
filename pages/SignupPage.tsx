import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.tsx';
import { Logo } from '../components/common/Logo.tsx';
import { User, Mail, Lock } from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
    } catch (error) {
      console.error("Signup failed:", error);
      // Here you would show an error toast
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
           <Link to="/" className="inline-block">
            <Logo />
          </Link>
        </div>
        <div className="bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-soft p-8">
          <h1 className="text-2xl font-bold text-center">Create Your Account</h1>
          <p className="text-center text-slate-500 mt-2">Start your journey to optimal health.</p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft disabled:opacity-70"
            >
              {loading ? 'Creating account...' : 'Create Account & Start'}
            </button>
          </form>
           <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-accent-600 dark:text-accent-400 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
