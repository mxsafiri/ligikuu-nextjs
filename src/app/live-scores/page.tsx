"use client";

import LiveScoreCard from "@/components/ui/LiveScoreCard";

export default function LiveScoresPage() {
  // Mock live scores data
  const liveScores = [
    {
      id: "1",
      homeTeam: "Simba SC",
      awayTeam: "Young Africans",
      homeScore: 2,
      awayScore: 1,
      status: "LIVE",
      minute: "75'",
      competition: "Tanzania Premier League",
      stadium: "Benjamin Mkapa Stadium"
    },
    {
      id: "2",
      homeTeam: "Azam FC",
      awayTeam: "Namungo FC",
      homeScore: 0,
      awayScore: 0,
      status: "LIVE",
      minute: "32'",
      competition: "Tanzania Premier League",
      stadium: "Azam Complex"
    }
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Header Section */}
      <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-green-400 p-8 text-white shadow-lg">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Live Scores</h1>
          <p className="mt-2 text-green-50">Real-time match updates from the Tanzania Premier League</p>
        </div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      </div>

      {/* Live Matches */}
      <div className="space-y-6">
        {liveScores.length > 0 ? (
          liveScores.map((match) => (
            <LiveScoreCard
              key={match.id}
              {...match}
              className="transform transition-all duration-300 hover:scale-[1.02]"
            />
          ))
        ) : (
          <div className="flex h-64 items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800/50">
            <p className="text-center text-gray-500 dark:text-gray-400">
              No live matches at the moment
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
