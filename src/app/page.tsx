import LiveScoreCard from "@/components/ui/LiveScoreCard";
import FixtureCard from "@/components/ui/FixtureCard";
import NewsCard from "@/components/ui/NewsCard";
import StatisticsCard from "@/components/ui/StatisticsCard";
import StandingsTable from "@/components/ui/StandingsTable";
import { MatchData } from "@/types";
import { motion } from "framer-motion";

async function getLiveScores() {
  try {
    // Use an absolute URL with the origin for server-side fetching
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';
      
    const res = await fetch(`${baseUrl}/api/livescores`, { next: { revalidate: 60 } });
    
    if (!res.ok) {
      throw new Error('Failed to fetch live scores');
    }
    
    const data = await res.json();
    return data.data as MatchData[];
  } catch (error) {
    console.error('Error fetching live scores:', error);
    return [];
  }
}

// Mock data for demonstration
const mockFixtures = [
  {
    homeTeam: "Simba SC",
    awayTeam: "Young Africans",
    date: "2025-03-01T15:00:00Z",
    time: "15:00",
    venue: "Benjamin Mkapa Stadium",
    competition: "Tanzania Premier League"
  },
  {
    homeTeam: "Azam FC",
    awayTeam: "Coastal Union",
    date: "2025-03-02T13:00:00Z",
    time: "13:00",
    venue: "Azam Complex Stadium",
    competition: "Tanzania Premier League"
  }
];

const mockNews = [
  {
    id: "1",
    title: "Simba SC Signs New Striker from Ghana Premier League",
    content: "Simba Sports Club has announced the signing of promising striker Emmanuel Afriyie from Asante Kotoko. The 23-year-old forward has been in excellent form, scoring 15 goals in the Ghana Premier League last season.",
    author: "John Doe",
    date: "2025-02-25T08:00:00Z",
    image: "/images/placeholder.jpg",
    category: "Transfers"
  },
  {
    id: "2",
    title: "Young Africans Prepare for CAF Champions League Clash",
    content: "Young Africans are intensifying their preparations for the upcoming CAF Champions League fixture against Al Ahly. The team has been training twice daily at the Benjamin Mkapa Stadium.",
    author: "Jane Smith",
    date: "2025-02-26T10:30:00Z",
    image: "/images/placeholder.jpg",
    category: "Champions League"
  }
];

const mockStats = [
  { label: "Goals Scored", value: 127, iconName: "⚽" },
  { label: "Top Scorer", value: "J. Bocco (12)", iconName: "🎯" },
  { label: "Clean Sheets", value: 35, iconName: "🧤" },
  { label: "Cards", value: "215 (18 Red)", iconName: "🟨" },
];

const mockStandings = [
  { position: 1, team: "Simba SC", played: 22, won: 17, drawn: 4, lost: 1, goalsFor: 38, goalsAgainst: 9, points: 55 },
  { position: 2, team: "Young Africans", played: 22, won: 16, drawn: 4, lost: 2, goalsFor: 35, goalsAgainst: 10, points: 52 },
  { position: 3, team: "Azam FC", played: 22, won: 14, drawn: 5, lost: 3, goalsFor: 30, goalsAgainst: 14, points: 47 },
  { position: 4, team: "Kagera Sugar", played: 22, won: 12, drawn: 4, lost: 6, goalsFor: 25, goalsAgainst: 18, points: 40 },
  { position: 5, team: "Coastal Union", played: 22, won: 11, drawn: 5, lost: 6, goalsFor: 24, goalsAgainst: 19, points: 38 },
  { position: 6, team: "KMC", played: 22, won: 9, drawn: 7, lost: 6, goalsFor: 20, goalsAgainst: 18, points: 34 },
  { position: 7, team: "Namungo FC", played: 22, won: 9, drawn: 6, lost: 7, goalsFor: 22, goalsAgainst: 20, points: 33 },
  { position: 8, team: "Mbeya City", played: 22, won: 8, drawn: 5, lost: 9, goalsFor: 19, goalsAgainst: 25, points: 29 },
  { position: 9, team: "Biashara United", played: 22, won: 6, drawn: 8, lost: 8, goalsFor: 17, goalsAgainst: 20, points: 26 },
  { position: 10, team: "Ihefu FC", played: 22, won: 6, drawn: 7, lost: 9, goalsFor: 15, goalsAgainst: 23, points: 25 },
  { position: 11, team: "Mtibwa Sugar", played: 22, won: 5, drawn: 7, lost: 10, goalsFor: 18, goalsAgainst: 25, points: 22 },
  { position: 12, team: "Polisi Tanzania", played: 22, won: 4, drawn: 8, lost: 10, goalsFor: 16, goalsAgainst: 27, points: 20 },
  { position: 13, team: "Mwadui FC", played: 22, won: 4, drawn: 7, lost: 11, goalsFor: 14, goalsAgainst: 28, points: 19 },
  { position: 14, team: "Ruvu Shooting", played: 22, won: 3, drawn: 7, lost: 12, goalsFor: 12, goalsAgainst: 30, points: 16 },
];

export default async function Home() {
  const liveScores = await getLiveScores();
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="mx-auto rounded-2xl bg-gradient-to-br from-green-900 to-green-700 p-6 text-white shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto flex flex-col items-center text-center">
          <h1 className="mb-4 bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            Tanzania Premier League
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-green-100">
            Follow live scores, fixtures, standings, and latest news from Tanzania's premier football competition
          </p>
          <div className="flex items-center justify-center space-x-4">
            <motion.span 
              className="inline-flex items-center rounded-full bg-green-100 bg-opacity-20 px-4 py-1.5"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
              <span className="text-sm font-medium">Live Updates</span>
            </motion.span>
          </div>
        </div>
      </motion.section>
      
      {/* Live Scores Section */}
      <section className="space-y-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Live Scores</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Latest matches from the Tanzania Premier League
            </p>
          </div>
          <motion.button 
            className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Matches
          </motion.button>
        </div>
        
        {liveScores && liveScores.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {liveScores.map((match: MatchData) => (
              <LiveScoreCard
                key={match.id}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                homeScore={match.homeScore}
                awayScore={match.awayScore}
                matchTime={match.matchTime}
                matchStatus={match.matchStatus}
              />
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-dashed bg-white p-12 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mb-4 text-4xl"
              >
                ⚽
              </motion.div>
              <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">No Live Matches</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                There are no live matches currently. Check back later.
              </p>
            </motion.div>
          </div>
        )}
      </section>
      
      {/* Upcoming Fixtures */}
      <section className="space-y-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Fixtures</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Don't miss the upcoming matches
            </p>
          </div>
          <motion.button 
            className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Full Schedule
          </motion.button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockFixtures.map((fixture, index) => (
            <FixtureCard
              key={index}
              homeTeam={fixture.homeTeam}
              awayTeam={fixture.awayTeam}
              date={fixture.date}
              time={fixture.time}
              venue={fixture.venue}
              competition={fixture.competition}
            />
          ))}
        </div>
      </section>
      
      {/* Two Column Layout - Standings and Stats */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <section className="space-y-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">League Standings</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Current Tanzania Premier League table
                </p>
              </div>
              <motion.button 
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Full Table
              </motion.button>
            </div>
            
            <StandingsTable standings={mockStandings} />
          </section>
        </div>
        
        <div>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Season Stats</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Key statistics from the league
              </p>
            </div>
            
            <StatisticsCard 
              title="Tanzania Premier League Stats"
              stats={mockStats}
            />
          </section>
        </div>
      </div>
      
      {/* Latest News */}
      <section className="space-y-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest News</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Stay updated with Tanzania football news
            </p>
          </div>
          <motion.button 
            className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All News
          </motion.button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockNews.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              author={item.author}
              date={item.date}
              image={item.image}
              category={item.category}
            />
          ))}
        </div>
      </section>
      
      {/* Info Alert */}
      <motion.div 
        className="rounded-xl bg-yellow-50 p-4 shadow-sm dark:bg-yellow-900/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
              About LigiKuu
            </h3>
            <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
              <p>
                LigiKuu provides Tanzania Premier League data gathered from public sources.
                The website auto-refreshes every minute for live matches. This is an unofficial fan site.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
