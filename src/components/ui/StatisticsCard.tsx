import { motion } from 'framer-motion';

interface StatItemProps {
  label: string;
  value: string | number;
  iconName?: string;
  className?: string;
}

interface StatisticsCardProps {
  title: string;
  stats: StatItemProps[];
  className?: string;
}

// Individual stat item with animation
function StatItem({ label, value, iconName, className = '' }: StatItemProps) {
  return (
    <motion.div 
      className={`flex items-center justify-between rounded-lg bg-white p-3 shadow-sm dark:bg-gray-800 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-3">
        {iconName && (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
            <span className="text-lg">{iconName}</span>
          </div>
        )}
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</span>
      </div>
      <span className="text-xl font-bold text-gray-900 dark:text-white">{value}</span>
    </motion.div>
  );
}

// Main statistics card component
export default function StatisticsCard({ title, stats, className = '' }: StatisticsCardProps) {
  return (
    <motion.div 
      className={`overflow-hidden rounded-xl border bg-gray-50 shadow-sm dark:border-gray-700 dark:bg-gray-900 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Card Header */}
      <div className="border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      {/* Stats Grid */}
      <div className="grid gap-3 p-4">
        {stats.map((stat, index) => (
          <StatItem 
            key={index} 
            label={stat.label} 
            value={stat.value} 
            iconName={stat.iconName}
            // Add staggered animation delay
            className={`transition-all ${stat.className || ''}`}
          />
        ))}
      </div>
      
      {/* Card Footer */}
      <div className="flex justify-end border-t border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
        <motion.button
          className="rounded-full bg-green-50 px-4 py-1 text-xs font-medium text-green-600 transition-colors hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Stats
        </motion.button>
      </div>
    </motion.div>
  );
}
