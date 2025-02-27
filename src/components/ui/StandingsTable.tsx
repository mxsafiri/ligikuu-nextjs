"use client";

import TeamLogo from "./TeamLogo";

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
  // Get team logo URL - in production, this would come from an API or database
  // const getTeamLogo = (teamName: string) => {
  //   return `/team-logos/${teamName.toLowerCase().replace(/\s+/g, '-')}.png`;
  // };

  // Calculate goal difference
  const getGoalDifference = (goalsFor: number, goalsAgainst: number) => {
    const diff = goalsFor - goalsAgainst;
    return diff > 0 ? `+${diff}` : diff;
  };
  
  // Get form indicator classes
  const getFormClasses = (won: number, drawn: number, lost: number) => {
    const ratio = won / (won + drawn + lost) * 100;
    if (ratio >= 60) return "bg-green-500 dark:bg-green-600";
    if (ratio >= 40) return "bg-yellow-500 dark:bg-yellow-600";
    return "bg-red-500 dark:bg-red-600";
  };

  return (
    <div 
      className="w-full overflow-hidden rounded-xl border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase text-gray-500 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-400">
              <th scope="col" className="px-4 py-3 text-center w-12">Pos</th>
              <th scope="col" className="px-4 py-3">Team</th>
              <th scope="col" className="px-4 py-3 text-center">P</th>
              <th scope="col" className="px-4 py-3 text-center hidden sm:table-cell">W</th>
              <th scope="col" className="px-4 py-3 text-center hidden sm:table-cell">D</th>
              <th scope="col" className="px-4 py-3 text-center hidden sm:table-cell">L</th>
              <th scope="col" className="px-4 py-3 text-center hidden lg:table-cell">GF</th>
              <th scope="col" className="px-4 py-3 text-center hidden lg:table-cell">GA</th>
              <th scope="col" className="px-4 py-3 text-center md:table-cell hidden">GD</th>
              <th scope="col" className="px-4 py-3 text-center font-bold">Pts</th>
              <th scope="col" className="px-4 py-3 hidden lg:table-cell">Form</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {standings.map((team, index) => {
              // Add special styling for different table positions
              let rowClass = '';
              let positionClass = 'text-gray-700 dark:text-gray-300';
              
              // Champions League (Top 4)
              if (team.position <= 4) {
                rowClass = 'bg-green-50/50 dark:bg-green-900/10';
                positionClass = 'text-green-700 dark:text-green-400 font-bold';
              } 
              // Europa League (5-6)
              else if (team.position <= 6) {
                rowClass = 'bg-blue-50/50 dark:bg-blue-900/10';
                positionClass = 'text-blue-700 dark:text-blue-400 font-medium';
              }
              // Relegation zone (bottom 3)
              else if (team.position >= standings.length - 2) {
                rowClass = 'bg-red-50/50 dark:bg-red-900/10';
                positionClass = 'text-red-700 dark:text-red-400 font-medium';
              }
              
              return (
                <tr 
                  key={team.position} 
                  className={`${rowClass} hover:bg-gray-50 dark:hover:bg-gray-700/30 cursor-pointer`}
                >
                  <td className={`px-4 py-3 text-center text-sm font-bold ${positionClass}`}>
                    {team.position}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="mr-3 flex-shrink-0">
                        <TeamLogo teamName={team.team} size={32} />
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">{team.team}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400">
                    {team.played}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                    {team.won}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                    {team.drawn}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                    {team.lost}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                    {team.goalsFor}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                    {team.goalsAgainst}
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-medium dark:text-gray-300 hidden md:table-cell">
                    {getGoalDifference(team.goalsFor, team.goalsAgainst)}
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white">
                    {team.points}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    <div className="flex space-x-1">
                      {/* Simulate form with colored dots based on win/loss ratio */}
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`h-2 w-2 rounded-full ${getFormClasses(team.won, team.drawn, team.lost)}`}
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Table Legend */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-3 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center flex-wrap gap-4">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-green-50 border border-green-300 dark:bg-green-900/20 dark:border-green-700 mr-1"></span>
            <span>Champions League</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-blue-50 border border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 mr-1"></span>
            <span>Europa League</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-red-50 border border-red-300 dark:bg-red-900/20 dark:border-red-700 mr-1"></span>
            <span>Relegation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
