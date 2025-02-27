interface LiveScoreCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
  matchTime: string;
  matchStatus: string;
}

export default function LiveScoreCard({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  matchTime,
  matchStatus,
}: LiveScoreCardProps) {
  const isLive = matchStatus === 'In Progress';
  
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {isLive ? 'LIVE' : matchStatus}
        </p>
        {isLive && (
          <span className="flex items-center">
            <span className="mr-1 h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
            <span className="text-sm font-medium text-red-500">{matchTime}</span>
          </span>
        )}
        {!isLive && (
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {matchTime}
          </span>
        )}
      </div>
      
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3 h-6 w-6 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              {/* Team logo would go here */}
            </div>
            <p className="font-medium">{homeTeam}</p>
          </div>
          <p className="font-bold text-lg">{homeScore}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3 h-6 w-6 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              {/* Team logo would go here */}
            </div>
            <p className="font-medium">{awayTeam}</p>
          </div>
          <p className="font-bold text-lg">{awayScore}</p>
        </div>
      </div>
      
      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
          Tanzania Premier League
        </span>
      </div>
    </div>
  );
}
