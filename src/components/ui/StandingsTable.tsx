interface TeamStanding {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

interface StandingsTableProps {
  standings: TeamStanding[];
}

export default function StandingsTable({ standings }: StandingsTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border shadow-sm dark:border-gray-700">
      <table className="w-full text-left">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            <th scope="col" className="px-6 py-3">Pos</th>
            <th scope="col" className="px-6 py-3">Team</th>
            <th scope="col" className="px-6 py-3">P</th>
            <th scope="col" className="px-6 py-3">W</th>
            <th scope="col" className="px-6 py-3">D</th>
            <th scope="col" className="px-6 py-3">L</th>
            <th scope="col" className="px-6 py-3">GF</th>
            <th scope="col" className="px-6 py-3">GA</th>
            <th scope="col" className="px-6 py-3">Pts</th>
          </tr>
        </thead>
        <tbody className="divide-y bg-white dark:divide-gray-700 dark:bg-gray-900">
          {standings.map((team) => {
            // Add special styling for top 4 (Champions League spots) and bottom 3 (relegation)
            let rowClass = 'bg-white dark:bg-gray-900';
            
            if (team.position <= 4) {
              rowClass = 'bg-green-50 dark:bg-green-900/20';
            } else if (team.position >= standings.length - 2) {
              rowClass = 'bg-red-50 dark:bg-red-900/20';
            }
            
            return (
              <tr 
                key={team.position} 
                className={`${rowClass} hover:bg-gray-50 dark:hover:bg-gray-800`}
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {team.position}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {team.team}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {team.played}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {team.won}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {team.drawn}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {team.lost}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {team.goalsFor}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {team.goalsAgainst}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">
                  {team.points}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
