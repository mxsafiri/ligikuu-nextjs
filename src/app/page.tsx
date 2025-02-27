import LiveScoreCard from "@/components/ui/LiveScoreCard";
import { MatchData } from "@/types";

async function getLiveScores() {
  try {
    // Use an absolute URL with the origin for server-side fetching
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';
      
    const res = await fetch(`${baseUrl}/api/livescores`, { next: { revalidate: 60 } });
    
    if (!res.ok) {
      throw new Error('Failed to fetch live scores');
    }
    
    const data = await res.json();
    return data.data as MatchData[];
  } catch (error) {
    console.error('Error fetching live scores:', error);
    return [];
  }
}

export default async function Home() {
  const liveScores = await getLiveScores();
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">Live Scores</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Latest matches from the Tanzania Premier League
          </p>
        </div>
        <div className="flex items-center rounded-lg bg-white p-2 shadow-sm dark:bg-gray-800">
          <span className="flex items-center">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
            <span className="text-sm font-medium">Live Updates</span>
          </span>
        </div>
      </div>
      
      {liveScores && liveScores.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {liveScores.map((match: MatchData) => (
            <LiveScoreCard
              key={match.id}
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              homeScore={match.homeScore}
              awayScore={match.awayScore}
              matchTime={match.matchTime}
              matchStatus={match.matchStatus}
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="mb-2 text-lg font-medium">No Live Matches</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            There are no live matches currently. Check back later.
          </p>
        </div>
      )}
      
      <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
              About Score Updates
            </h3>
            <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
              <p>
                Scores are scraped from public sources and may have a slight delay. 
                This page auto-refreshes every minute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
