import { format, parseISO } from 'date-fns';
import Link from 'next/link';

interface NewsCardProps {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export default function NewsCard({
  id,
  title,
  content,
  author,
  date,
  image,
  category,
}: NewsCardProps) {
  // Format the date for better display
  const formattedDate = format(parseISO(date), 'MMM d, yyyy');
  
  // Truncate content for preview
  const truncatedContent = content.length > 150 
    ? content.substring(0, 150) + '...' 
    : content;

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
        {/* If we have an image, show it, otherwise show a placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/placeholder.jpg';
              }}
            />
          ) : (
            <span>No image available</span>
          )}
        </div>
        
        <div className="absolute right-2 top-2">
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            By {author}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {formattedDate}
          </span>
        </div>
        
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          {truncatedContent}
        </p>
        
        <Link 
          href={`/news/${id}`}
          className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-700 dark:hover:bg-green-600"
        >
          Read More
          <svg 
            className="ml-1 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
