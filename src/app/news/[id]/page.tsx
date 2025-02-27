import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { NewsArticle } from '@/types';

async function getNewsArticle(id: string): Promise<NewsArticle | null> {
  try {
    // Read from the news JSON file
    const filePath = path.join(process.cwd(), 'src/data/news.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);
    
    // Find the article with the matching ID
    const article = data.news.find((item: NewsArticle) => item.id.toString() === id);
    
    if (!article) {
      return null;
    }
    
    return article;
  } catch (error) {
    console.error('Error fetching news article:', error);
    return null;
  }
}

export default async function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = await getNewsArticle(params.id);
  
  if (!article) {
    notFound();
  }
  
  const formattedDate = format(parseISO(article.date), 'MMMM d, yyyy');
  
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <Link 
        href="/news" 
        className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
      >
        <svg 
          className="mr-2 h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
            clipRule="evenodd" 
          />
        </svg>
        Back to News
      </Link>
      
      <article className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
        <div className="relative h-64 w-full bg-gray-200 md:h-80 dark:bg-gray-700">
          {/* If we have an image, show it, otherwise show a placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
            {article.image ? (
              <div className="relative h-full w-full">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
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
          
          <div className="absolute right-4 top-4">
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
              {article.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              By {article.author}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {formattedDate}
            </span>
          </div>
          
          <h1 className="mb-6 text-2xl font-bold md:text-3xl">{article.title}</h1>
          
          <div className="prose max-w-none dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300">{article.content}</p>
          </div>
        </div>
      </article>
      
      <div className="flex justify-center">
        <Link 
          href="/news" 
          className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-700 dark:hover:bg-green-600"
        >
          More News Articles
        </Link>
      </div>
    </div>
  );
}
