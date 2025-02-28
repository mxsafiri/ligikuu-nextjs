import Image from "next/image";
import Link from "next/link";

interface LiveScoreCardProps {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: string;
  minute: string;
  competition: string;
  stadium: string;
  className?: string;
}

export default function LiveScoreCard({
  id,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  minute,
  competition,
  stadium,
  className = "",
}: LiveScoreCardProps) {
  return (
    <Link
      href={`/match/${id}`}
      className={`block rounded-xl bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-200 ${className}`}
    >
      <div className="p-4">
        {/* Competition & Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {competition}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400 mr-1.5 animate-pulse"></span>
              {status} {minute}
            </span>
          </div>
        </div>

        {/* Teams & Score */}
        <div className="flex items-center justify-between">
          {/* Home Team */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src={`/teams/${homeTeam.toLowerCase().replace(/\s+/g, '-')}.png`}
                alt={homeTeam}
                fill
                className="object-contain"
              />
            </div>
            <span className="font-medium">{homeTeam}</span>
          </div>

          {/* Score */}
          <div className="flex items-center space-x-3 px-4">
            <span className="text-2xl font-bold tabular-nums">
              {homeScore}
            </span>
            <span className="text-xl font-medium text-gray-400">-</span>
            <span className="text-2xl font-bold tabular-nums">
              {awayScore}
            </span>
          </div>

          {/* Away Team */}
          <div className="flex items-center space-x-3">
            <span className="font-medium">{awayTeam}</span>
            <div className="relative w-12 h-12">
              <Image
                src={`/teams/${awayTeam.toLowerCase().replace(/\s+/g, '-')}.png`}
                alt={awayTeam}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Stadium */}
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {stadium}
        </div>
      </div>
    </Link>
  );
}
