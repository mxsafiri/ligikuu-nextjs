"use client";

import { format, parseISO } from 'date-fns';
import TeamLogo from './TeamLogo';

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
  // Format the date for better display
  const formattedDate = format(parseISO(date), 'EEE, MMM d, yyyy');
  
  return (
    <div 
      className={`overflow-hidden rounded-xl border bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${className}`}
    >
      <div 
        className="mb-3 text-center"
      >
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-green-200 px-3 py-1 text-xs font-semibold text-green-800 dark:from-green-900 dark:to-green-800 dark:text-green-100">
          {competition}
        </span>
      </div>
      
      <div 
        className="mb-4"
      >
        <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
          {formattedDate} • {time}
        </p>
        <p className="mt-1 text-center text-xs text-gray-500 dark:text-gray-400">
          {venue}
        </p>
      </div>
      
      <div className="flex items-center justify-between">
        <div 
          className="flex flex-1 flex-col items-center"
        >
          <TeamLogo teamName={homeTeam} size={40} className="mb-2" />
          <p className="text-center font-medium text-gray-900 dark:text-white">{homeTeam}</p>
        </div>
        
        <div 
          className="mx-4 text-center"
        >
          <span className="inline-block rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 text-xl font-bold dark:from-gray-700 dark:to-gray-600 dark:text-white">
            vs
          </span>
        </div>
        
        <div 
          className="flex flex-1 flex-col items-center"
        >
          <TeamLogo teamName={awayTeam} size={40} className="mb-2" />
          <p className="text-center font-medium text-gray-900 dark:text-white">{awayTeam}</p>
        </div>
      </div>
      
      <div 
        className="mt-4 flex justify-center"
      >
        <button 
          className="rounded-full bg-green-50 px-4 py-1 text-xs font-medium text-green-600 transition-colors hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
        >
          Match Details
        </button>
      </div>
    </div>
  );
}
