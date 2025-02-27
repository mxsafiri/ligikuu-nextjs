import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">404</h2>
      <p className="mb-6 text-xl text-gray-600 dark:text-gray-400">Page not found</p>
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-700 dark:hover:bg-green-600"
      >
        Go back home
      </Link>
    </div>
  );
}
