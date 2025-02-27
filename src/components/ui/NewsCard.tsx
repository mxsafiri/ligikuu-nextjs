"use client";

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
  className?: string;
}

export default function NewsCard({
  id,
  title,
  content,
  author,
  date,
  image,
  category,
  className = '',
}: NewsCardProps) {
  // Format the date
  const formattedDate = format(parseISO(date), 'MMM d, yyyy');
  
  // Truncate the content if it's too long
  const truncatedContent = content.length > 150 
    ? `${content.substring(0, 150)}...` 
    : content;
  
  return (
    <div 
      className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${className}`}
    >
      <div className="relative h-52 w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
        {/* If we have an image, show it, otherwise show a placeholder */}
        <div className="flex h-full items-center justify-center">
          {image ? (
            <div 
              className="relative h-full w-full"
            >
              <Image 
                src={image} 
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg"
              />
            </div>
          ) : (
            <span className="text-sm">No image available</span>
          )}
        </div>
        
        <div 
          className="absolute right-3 top-3"
        >
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-green-200 px-3 py-1 text-xs font-semibold text-green-800 dark:from-green-900 dark:to-green-800 dark:text-green-100">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 
          className="mb-3 text-lg font-bold line-clamp-2 text-gray-900 dark:text-white"
        >
          {title}
        </h3>
        
        <p 
          className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-3"
        >
          {truncatedContent}
        </p>
        
        <div 
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-1">
            <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {author} · {formattedDate}
            </span>
          </div>
          
          <div>
            <Link
              href={`/news/${id}`}
              className="rounded-full bg-green-50 px-4 py-1 text-xs font-medium text-green-600 transition-colors hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
