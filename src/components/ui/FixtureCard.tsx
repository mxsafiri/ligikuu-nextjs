import { format, parseISO } from 'date-fns';
import { motion } from 'framer-motion';
import TeamLogo from './TeamLogo';

interface FixtureCardProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
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
    <motion.div 
      className={`overflow-hidden rounded-xl border bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <motion.div 
        className="mb-3 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-green-200 px-3 py-1 text-xs font-semibold text-green-800 dark:from-green-900 dark:to-green-800 dark:text-green-100">
          {competition}
        </span>
      </motion.div>
      
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
          {formattedDate} • {time}
        </p>
        <p className="mt-1 text-center text-xs text-gray-500 dark:text-gray-400">
          {venue}
        </p>
      </motion.div>
      
      <div className="flex items-center justify-between">
        <motion.div 
          className="flex flex-1 flex-col items-center"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <TeamLogo teamName={homeTeam} size={40} className="mb-2" />
          <p className="text-center font-medium text-gray-900 dark:text-white">{homeTeam}</p>
        </motion.div>
        
        <motion.div 
          className="mx-4 text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 0.4,
            type: "spring",
            stiffness: 500,
            damping: 15
          }}
        >
          <span className="inline-block rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 text-xl font-bold dark:from-gray-700 dark:to-gray-600 dark:text-white">
            vs
          </span>
        </motion.div>
        
        <motion.div 
          className="flex flex-1 flex-col items-center"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <TeamLogo teamName={awayTeam} size={40} className="mb-2" />
          <p className="text-center font-medium text-gray-900 dark:text-white">{awayTeam}</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-4 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button 
          className="rounded-full bg-green-50 px-4 py-1 text-xs font-medium text-green-600 transition-colors hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Match Details
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
