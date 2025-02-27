import { format, parseISO } from 'date-fns';

interface FixtureCardProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  competition: string;
}

export default function FixtureCard({
  homeTeam,
  awayTeam,
  date,
  time,
  venue,
  competition,
}: FixtureCardProps) {
  // Format the date for better display
  const formattedDate = format(parseISO(date), 'EEE, MMM d, yyyy');
  
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 text-center">
        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
          {competition}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
          {formattedDate} • {time}
        </p>
        <p className="mt-1 text-center text-xs text-gray-500 dark:text-gray-400">
          {venue}
        </p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-1 flex-col items-center">
          <div className="mb-2 h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
            {/* Team logo would go here */}
          </div>
          <p className="text-center font-medium">{homeTeam}</p>
        </div>
        
        <div className="mx-4 text-center">
          <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-xl font-bold dark:bg-gray-700">
            vs
          </span>
        </div>
        
        <div className="flex flex-1 flex-col items-center">
          <div className="mb-2 h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
            {/* Team logo would go here */}
          </div>
          <p className="text-center font-medium">{awayTeam}</p>
        </div>
      </div>
    </div>
  );
}
