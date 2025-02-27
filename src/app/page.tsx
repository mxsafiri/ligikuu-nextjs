import TeamLogo from "@/components/ui/TeamLogo";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Mock data for featured matches
  const featuredMatches = [
    {
      id: "1",
      homeTeam: "Simba SC",
      awayTeam: "Young Africans",
      date: "2025-03-01",
      time: "16:00",
      competition: "Tanzania Premier League",
      stadium: "Benjamin Mkapa Stadium"
    },
    {
      id: "2",
      homeTeam: "Azam FC",
      awayTeam: "Namungo FC",
      date: "2025-03-02",
      time: "14:00",
      competition: "Tanzania Premier League",
      stadium: "Azam Complex"
    }
  ];

  // Mock data for news
  const featuredNews = [
    {
      id: "1",
      title: "Simba SC Signs New Striker from Ghana",
      summary: "Simba Sports Club has completed the signing of Ghanaian striker Ibrahim Mensah.",
      image: "/images/placeholder.jpg",
      date: "2025-02-25"
    },
    {
      id: "2",
      title: "Young Africans Appoint New Head Coach",
      summary: "Young Africans FC has appointed Brazilian coach Carlos Silva as their new head coach.",
      image: "/images/placeholder.jpg",
      date: "2025-02-23"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-green-700 opacity-90">
          <div className="absolute inset-0 bg-[url('/stadium.jpg')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
            Tanzania Premier League
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            The home of Tanzanian football - follow the latest scores, fixtures, 
            standings, and news from the Tanzania Premier League.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/fixtures" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-lg"
            >
              Upcoming Fixtures
            </Link>
            <Link 
              href="/standings" 
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm transition-colors border border-white/20"
            >
              League Table
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Matches Section */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Featured Matches
            </h2>
            <Link 
              href="/fixtures" 
              className="text-green-600 dark:text-green-400 hover:underline font-medium flex items-center"
            >
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredMatches.map((match) => (
              <div 
                key={match.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-5">
                  <div className="text-xs font-medium text-green-600 dark:text-green-400 mb-3">
                    {match.competition}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center flex-1">
                      <TeamLogo teamName={match.homeTeam} size={56} className="mb-2" />
                      <span className="font-medium text-gray-900 dark:text-gray-100">{match.homeTeam}</span>
                    </div>
                    
                    <div className="mx-4 text-center">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {match.date}
                      </div>
                      <div className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">VS</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {match.time}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center flex-1">
                      <TeamLogo teamName={match.awayTeam} size={56} className="mb-2" />
                      <span className="font-medium text-gray-900 dark:text-gray-100">{match.awayTeam}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
                    {match.stadium}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Latest News
            </h2>
            <Link 
              href="/news" 
              className="text-green-600 dark:text-green-400 hover:underline font-medium flex items-center"
            >
              All News
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredNews.map((article) => (
              <Link 
                href={`/news/${article.id}`} 
                key={article.id}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="/images/placeholder.jpg"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-green-600 dark:text-green-400 text-sm mb-2">
                      {article.date}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {article.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Teams
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center hover:scale-110 transition-transform">
              <TeamLogo teamName="Simba SC" size={80} className="mb-3" />
              <span className="font-medium text-gray-900 dark:text-gray-100">Simba SC</span>
            </div>
            
            <div className="flex flex-col items-center hover:scale-110 transition-transform">
              <TeamLogo teamName="Young Africans" size={80} className="mb-3" />
              <span className="font-medium text-gray-900 dark:text-gray-100">Young Africans</span>
            </div>
            
            <div className="flex flex-col items-center hover:scale-110 transition-transform">
              <TeamLogo teamName="Azam FC" size={80} className="mb-3" />
              <span className="font-medium text-gray-900 dark:text-gray-100">Azam FC</span>
            </div>
            
            <div className="flex flex-col items-center hover:scale-110 transition-transform">
              <TeamLogo teamName="Namungo FC" size={80} className="mb-3" />
              <span className="font-medium text-gray-900 dark:text-gray-100">Namungo FC</span>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/teams" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors inline-block"
            >
              View All Teams
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
