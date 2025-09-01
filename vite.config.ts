import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    // FIX: Cast `process` to `any` to resolve a TypeScript error where `cwd` is not found.
    // This is a workaround for a potential issue where the TypeScript environment for the
    // config file does not include the full Node.js type definitions for the `process` global.
    const env = loadEnv(mode, (process as any).cwd(), '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL),
        'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(env.VITE_SUPABASE_ANON_KEY),
      },
      resolve: {
        alias: {
          // FIX: Replaced `__dirname` with `(process as any).cwd()` to resolve the "Cannot find name '__dirname'" error. This correctly sets the '@' alias to the project's root directory.
          '@': path.resolve((process as any).cwd(), '.'),
        }
      }
    };
});