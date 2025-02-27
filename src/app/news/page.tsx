import NewsCard from "@/components/ui/NewsCard";
import { NewsArticle } from "@/types";

async function getNews() {
  try {
    const res = await fetch('/api/news', { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      throw new Error('Failed to fetch news');
    }
    
    const data = await res.json();
    return data.data as NewsArticle[];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export default async function NewsPage() {
  const news = await getNews();
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">Latest News</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Updates and analysis from the Tanzania Premier League
        </p>
      </div>
      
      {news && news.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article: NewsArticle) => (
            <NewsCard
              key={article.id}
              id={article.id}
              title={article.title}
              content={article.content}
              author={article.author}
              date={article.date}
              image={article.image}
              category={article.category}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
          <svg
            className="mb-4 h-12 w-12 text-gray-400 dark:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <h3 className="mb-2 text-lg font-medium">No News Articles</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            There are no news articles available at the moment. Check back later.
          </p>
        </div>
      )}
    </div>
  );
}
