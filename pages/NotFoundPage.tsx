import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[50vh]">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white">
        Go back to Home
      </Link>
    </div>
  );
}
