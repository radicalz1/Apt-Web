import { isMock } from '../../utils/supabaseClient.ts';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export const DevTools = () => {
    if (!isMock) {
        return null;
    }

    return (
        <Link 
            to="/admin" 
            className="fixed bottom-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-yellow-900 font-bold shadow-lg hover:bg-yellow-500 transition-colors"
            title="Developer tool: Go to Admin Panel"
            aria-label="Developer tool: Go to Admin Panel"
        >
            <Shield size={16} />
            Admin (Dev)
        </Link>
    );
};