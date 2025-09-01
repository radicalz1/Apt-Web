import { createClient } from '@supabase/supabase-js';

// These variables are expected to be set in the environment.
// On Vercel, they are set in the project settings.
// For local development, they would be in a .env file (which is not committed).
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase credentials not found. Using mock client for development.");

  // This is a simplified mock client.
  // It allows login/signup and basic data operations without a real backend.
  
  let mockUser: any = null;
  let onAuthStateChangeCallback: Function | null = null;
  const mockSubmissions: any[] = [];

  const mockSupabase = {
    auth: {
      onAuthStateChange: (callback: (event: string, session: any | null) => void) => {
        onAuthStateChangeCallback = callback;
        // Simulate initial state check. Let's start logged out.
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
        if (onAuthStateChangeCallback) {
          onAuthStateChangeCallback('SIGNED_IN', { user: mockUser });
        }
        return Promise.resolve({ data: { user: mockUser, session: {} }, error: null });
      },
      signUp: async ({ email, options }: { email: string, options: any }) => {
        console.log(`[MOCK] Signing up as ${email}`);
        mockUser = { id: 'mock-user-123', email: email, user_metadata: { name: options?.data?.name || 'Mock User' } };
        if (onAuthStateChangeCallback) {
          onAuthStateChangeCallback('SIGNED_IN', { user: mockUser });
        }
        return Promise.resolve({ data: { user: mockUser, session: {} }, error: null });
      },
      signOut: async () => {
        console.log('[MOCK] Signing out');
        mockUser = null;
        if (onAuthStateChangeCallback) {
          onAuthStateChangeCallback('SIGNED_OUT', null);
        }
        return Promise.resolve({ error: null });
      },
    },
    from: (tableName: string) => ({
      insert: async (data: any[]) => {
        console.log(`[MOCK] Inserting into ${tableName}:`, data);
        if (tableName === 'submissions') {
          mockSubmissions.push(...data.map(d => ({...d, id: crypto.randomUUID(), created_at: new Date().toISOString(), submitted_at: new Date().toISOString() })));
        }
        return Promise.resolve({ data: data, error: null });
      },
      select: (query = '*') => ({
        eq: (column: string, value: any) => ({
          order: (_orderCol: string, _options: any) => {
            console.log(`[MOCK] Selecting from ${tableName} where ${column} = ${value}`);
            if (tableName === 'submissions' && column === 'user_id') {
              const userSubmissions = mockSubmissions.filter(s => s.user_id === value);
              return Promise.resolve({ data: userSubmissions, error: null });
            }
            return Promise.resolve({ data: [], error: null });
          }
        })
      }),
    }),
  };

  supabase = mockSupabase as any;

} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
