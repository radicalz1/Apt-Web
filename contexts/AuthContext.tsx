import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/index.ts';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient.ts';

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  signup: (name: string, email: string, pass: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isInitialized: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const currentUser: User = {
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata.name || session.user.email || '',
        };
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setIsInitialized(true);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, pass: string) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password: pass });
    setLoading(false);
    if (error) {
      throw error;
    }
    // onAuthStateChange will handle setting the user
    navigate('/dashboard');
  };

  const signup = async (name: string, email: string, pass: string) => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password: pass,
      options: {
        data: {
          name: name,
        },
      },
    });
    setLoading(false);
    if (error) {
      throw error;
    }
    // onAuthStateChange will handle setting the user
    navigate('/questionnaire');
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null); // Explicitly set user to null
    navigate('/');
  };

  const value = { user, login, signup, logout, loading, isInitialized };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
