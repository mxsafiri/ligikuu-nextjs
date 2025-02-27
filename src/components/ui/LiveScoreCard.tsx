import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <motion.div 
      className="card p-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
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
      <div className="flex flex-col space-y-4">
        {/* Home Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="mr-3 h-8 w-8 relative overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
              <Image 
                src={getTeamLogo(homeTeam)} 
                alt={`${homeTeam} logo`}
                width={32} 
                height={32}
                className="object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.src = '/team-logos/default.png';
                }}
              />
            </div>
            <p className="font-medium truncate">{homeTeam}</p>
          </div>
          <div className={`font-bold text-xl px-2 py-1 min-w-[40px] text-center ${hasScores && isLive ? 'live-score-flash rounded' : ''}`}>
            {homeScore}
          </div>
        </div>
        
        {/* Score Separator */}
        <div className="flex items-center justify-center">
          <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700"></div>
          <span className="px-2 text-sm text-gray-500 dark:text-gray-400">VS</span>
          <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700"></div>
        </div>
        
        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="mr-3 h-8 w-8 relative overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
              <Image 
                src={getTeamLogo(awayTeam)} 
                alt={`${awayTeam} logo`}
                width={32} 
                height={32}
                className="object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.src = '/team-logos/default.png';
                }}
              />
            </div>
            <p className="font-medium truncate">{awayTeam}</p>
          </div>
          <div className={`font-bold text-xl px-2 py-1 min-w-[40px] text-center ${hasScores && isLive ? 'live-score-flash rounded' : ''}`}>
            {awayScore}
          </div>
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
    </motion.div>
  );
}
