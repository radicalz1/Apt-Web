import { createClient } from '@supabase/supabase-js';

// Environment variables are injected by Vite's `define` config.
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

export const isMock = !supabaseUrl || !supabaseAnonKey;

let supabase;

if (isMock) {
  console.warn("Supabase credentials not found. Using mock client for development.");

  // This is a simplified mock client.
  // We start with a logged-in admin user for easier dev tooling.
  let mockUser: any = { id: 'mock-admin-id', email: 'admin@mock.com', user_metadata: { name: 'Dev Admin' } };
  let onAuthStateChangeCallback: Function | null = null;
  
  const mockAuth = {
      onAuthStateChange: (callback: (event: string, session: any | null) => void) => {
        onAuthStateChangeCallback = callback;
        setTimeout(() => {
            if (onAuthStateChangeCallback) {
                onAuthStateChangeCallback('INITIAL_SESSION', mockUser ? { user: mockUser } : null)
            }
        }, 100);
        return {
          data: { subscription: { unsubscribe: () => { onAuthStateChangeCallback = null; } } },
        };
      },
      signInWithPassword: async ({ email }: { email: string }) => {
        console.log(`[MOCK] Signing in as ${email}`);
        mockUser = { id: 'mock-user-123', email: email, user_metadata: { name: 'Mock User' } };
        if (onAuthStateChangeCallback) onAuthStateChangeCallback('SIGNED_IN', { user: mockUser });
        return { data: { user: mockUser }, error: null };
      },
      signUp: async ({ email, options }: { email: string, options: any }) => {
        console.log(`[MOCK] Signing up as ${email}`);
         if (email.includes('existing')) {
          return { data: {}, error: { message: 'User already registered' } };
        }
        mockUser = { id: 'mock-user-456', email: email, user_metadata: { name: options?.data?.name || 'New Mock User' } };
        if (onAuthStateChangeCallback) onAuthStateChangeCallback('USER_ADDED', { user: mockUser });
        return { data: { user: mockUser }, error: null };
      },
      signOut: async () => {
        console.log('[MOCK] Signing out');
        mockUser = null;
        if (onAuthStateChangeCallback) onAuthStateChangeCallback('SIGNED_OUT', null);
        return { error: null };
      },
  };

  const from = (tableName: string) => {
    const queryBuilder: any = {
      select: () => queryBuilder,
      insert: (rows: any[]) => {
        console.log(`[MOCK INSERT] into ${tableName}:`, rows);
        return Promise.resolve({ data: rows, error: null });
      },
      eq: () => queryBuilder,
      or: () => queryBuilder,
      order: () => queryBuilder,
      limit: () => queryBuilder,
      range: () => queryBuilder,
      single: () => {
        if (tableName === 'profiles') {
          return Promise.resolve({ data: { name: 'Mock Admin', role: 'super_admin' }, error: null });
        }
        return Promise.resolve({ data: {}, error: null });
      },
      then: (resolve: Function) => {
        // Handle queries that are awaited directly (without .single())
        if (tableName === 'submissions') {
          return resolve({ data: [], count: 0, error: null });
        }
        if (tableName === 'profiles') {
          // For AdminUsersPage
          const users = [{ id: 'mock-admin-id', name: 'Dev Admin', role: 'super_admin', users: { email: 'admin@mock.com', created_at: new Date().toISOString() }}];
          return resolve({ data: users, count: users.length, error: null });
        }
        return resolve({ data: [], count: 0, error: null });
      },
    };
    return queryBuilder;
  };

  supabase = { auth: mockAuth, from } as any;

} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
