import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

interface NewsCardProps {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image?: string;
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
  // Format the date
  const formattedDate = format(parseISO(date), 'MMM d, yyyy');
  
  // Truncate the content if it's too long
  const truncatedContent = content.length > 150 
    ? `${content.substring(0, 150)}...` 
    : content;
  
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
        {/* If we have an image, show it, otherwise show a placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
          {image ? (
            <div className="relative h-full w-full">
              <Image 
                src={image} 
                alt={title} 
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/images/placeholder.jpg';
                }}
              />
            </div>
          ) : (
            <span>No image available</span>
          )}
        </div>
        
        <div className="absolute right-2 top-2">
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold line-clamp-2">{title}</h3>
        
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {truncatedContent}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {author} · {formattedDate}
          </span>
          
          <Link
            href={`/news/${id}`}
            className="text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
