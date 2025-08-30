import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/index.ts';
import { useNavigate } from 'react-router-dom';

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
    // On initial load, check localStorage for a saved user session
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to parse user from localStorage', error);
      localStorage.removeItem('user');
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const login = async (email: string, pass: string) => {
    setLoading(true);
    // MOCK LOGIN: In a real app, this would be a call to Supabase
    console.log('Logging in with:', email, pass);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For this mock, we'll create a user object if one doesn't exist.
    const mockUser: User = { id: '123', name: 'Jane Doe', email };
    
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    setLoading(false);
    navigate('/dashboard');
  };

  const signup = async (name: string, email: string, pass: string) => {
    setLoading(true);
    // MOCK SIGNUP: In a real app, this would be a call to Supabase
    console.log('Signing up with:', name, email, pass);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newUser: User = { id: Date.now().toString(), name, email };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    setLoading(false);
    navigate('/questionnaire'); // Redirect to questionnaire after signup
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
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
