import Image from 'next/image';

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
  const hasScores = homeScore !== '' && awayScore !== '';
  
  // Get team logo URL - in production, this would come from an API or database
  const getTeamLogo = (teamName: string) => {
    return `/team-logos/${teamName.toLowerCase().replace(/\s+/g, '-')}.png`;
  };
  
  return (
    <div 
      className="card p-4 overflow-hidden transform transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl"
    >
      {/* Match Status Banner */}
      <div className={`-mx-4 -mt-4 px-4 py-2 mb-3 ${isLive ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">
            {isLive ? 'LIVE' : matchStatus}
          </p>
          {isLive ? (
            <div className="flex items-center">
              <span className="mr-1 h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
              <span className="text-sm font-medium">{matchTime}</span>
            </div>
          ) : (
            <span className="text-sm font-medium">
              {matchTime}
            </span>
          )}
        </div>
      </div>
      
      {/* Teams and Scores */}
      <div className="grid grid-cols-3 gap-4 items-center">
        {/* Home Team */}
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-12 h-12 transition-transform duration-300 hover:scale-110">
            <Image
              src={getTeamLogo(homeTeam)}
              alt={`${homeTeam} logo`}
              fill
              className="object-contain"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src = '/team-logos/default.png';
              }}
            />
          </div>
          <span className="text-sm font-medium text-center dark:text-gray-200">{homeTeam}</span>
        </div>

        {/* Score */}
        <div className="flex justify-center items-center">
          {hasScores ? (
            <div className="text-2xl font-bold text-center space-x-2 dark:text-white">
              <span>{homeScore}</span>
              <span>-</span>
              <span>{awayScore}</span>
            </div>
          ) : (
            <span className="text-sm text-gray-500 dark:text-gray-400">vs</span>
          )}
        </div>

        {/* Away Team */}
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-12 h-12 transition-transform duration-300 hover:scale-110">
            <Image
              src={getTeamLogo(awayTeam)}
              alt={`${awayTeam} logo`}
              fill
              className="object-contain"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src = '/team-logos/default.png';
              }}
            />
          </div>
          <span className="text-sm font-medium text-center dark:text-gray-200">{awayTeam}</span>
        </div>
      </div>
      
      {/* Match Details Link */}
      {isLive && (
        <div className="mt-4 text-center">
          <button className="text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium underline">
            Match Details
          </button>
        </div>
      )}
    </div>
  );
}
