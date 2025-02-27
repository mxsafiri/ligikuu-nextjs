import NewsCard from "@/components/ui/NewsCard";
import { NewsItem } from "@/types";

function getNews(): NewsItem[] {
  // Mock news data
  return [
    {
      id: "1",
      title: "Simba SC Signs New Striker from Ghana",
      summary: "Simba Sports Club has completed the signing of Ghanaian striker Ibrahim Mensah",
      content: "Simba Sports Club has completed the signing of Ghanaian striker Ibrahim Mensah from Asante Kotoko on a three-year deal. The 23-year-old forward scored 18 goals in the Ghana Premier League last season.",
      author: "Benjamin Mkapa",
      date: "2025-02-25",
      category: "Transfers"
    },
    {
      id: "2",
      title: "Young Africans Appoint New Head Coach",
      summary: "Young Africans FC has appointed Brazilian coach Carlos Silva as their new head coach",
      content: "Young Africans FC has appointed Brazilian coach Carlos Silva as their new head coach following the departure of Nasreddine Nabi.",
      author: "Sarah Makamba",
      date: "2025-02-23",
      category: "Management"
    },
    {
      id: "3",
      title: "Tanzania Premier League Announces New Broadcast Deal",
      summary: "The Tanzania Premier League has signed a new broadcast deal worth $5 million",
      content: "The Tanzania Premier League has signed a new broadcast deal worth $5 million with SuperSport for the next three seasons.",
      author: "John Bocco",
      date: "2025-02-20",
      category: "Business"
    }
  ];
}

export default function NewsPage() {
  const news = getNews();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-green-600 dark:text-green-400">Latest News</h1>
      
      {news && news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard 
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.summary} // Use summary as content
              image="/images/placeholder.jpg"
              date={item.date}
              author={item.author}
              category={item.category}
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
