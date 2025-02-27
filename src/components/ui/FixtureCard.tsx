"use client";

import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface FixtureCardProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time?: string;
  venue: string;
  competition: string;
  className?: string;
}

export default function FixtureCard({
  homeTeam,
  awayTeam,
  date,
  time,
  venue,
  competition,
  className = '',
}: FixtureCardProps) {
  const formattedDate = format(parseISO(date), 'EEE, MMM d, yyyy');
  
  const getTeamLogo = (teamName: string) => {
    return `/team-logos/${teamName.toLowerCase().replace(/\s+/g, '-')}.png`;
  };

  return (
    <Link href={`/match/${homeTeam.toLowerCase()}-vs-${awayTeam.toLowerCase()}`}>
      <div 
        className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800/50 dark:hover:bg-gray-800/80 ${className}`}
      >
        {/* Competition Badge */}
        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10 dark:bg-green-900/20 dark:text-green-300 dark:ring-green-500/20">
            {competition}
          </span>
        </div>

        {/* Match Time & Venue */}
        <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="font-medium">{formattedDate} • {time}</div>
          <div className="mt-1 text-xs">{venue}</div>
        </div>

        {/* Teams */}
        <div className="flex items-center justify-between space-x-8">
          {/* Home Team */}
          <div className="flex flex-1 flex-col items-center space-y-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-50 p-2 transition-transform duration-300 group-hover:scale-110 dark:bg-gray-700">
              <Image
                src={getTeamLogo(homeTeam)}
                alt={homeTeam}
                fill
                className="object-contain p-1"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/team-logos/default.png';
                }}
              />
            </div>
            <span className="text-center font-medium dark:text-gray-200">{homeTeam}</span>
          </div>

          {/* VS */}
          <div className="flex flex-col items-center">
            <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-900 dark:bg-gray-700 dark:text-gray-100">
              VS
            </span>
          </div>

          {/* Away Team */}
          <div className="flex flex-1 flex-col items-center space-y-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-50 p-2 transition-transform duration-300 group-hover:scale-110 dark:bg-gray-700">
              <Image
                src={getTeamLogo(awayTeam)}
                alt={awayTeam}
                fill
                className="object-contain p-1"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/team-logos/default.png';
                }}
              />
            </div>
            <span className="text-center font-medium dark:text-gray-200">{awayTeam}</span>
          </div>
        </div>

        {/* Match Details Button */}
        <div className="mt-6 text-center">
          <span className="inline-flex items-center text-xs font-medium text-green-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-green-400">
            View Match Details
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
