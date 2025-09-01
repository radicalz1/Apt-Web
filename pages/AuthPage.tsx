import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/common/Logo.tsx';
import { SignupForm } from '../components/auth/SignupForm.tsx';
import { LoginForm } from '../components/auth/LoginForm.tsx';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <Logo />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 md:gap-px bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-soft border border-slate-200 dark:border-slate-800">
          <div className="bg-white/80 dark:bg-slate-900/40 p-8">
            <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
            <p className="text-center text-slate-500 mt-2 text-sm">Start your journey to optimal health.</p>
            <SignupForm />
          </div>
          <div className="bg-white/80 dark:bg-slate-900/40 p-8">
            <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
            <p className="text-center text-slate-500 mt-2 text-sm">Sign in to access your dashboard.</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}