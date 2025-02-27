// Match and Live Score types
export interface MatchData {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
  matchTime: string;
  matchStatus: string;
}

// Fixture types
export interface FixtureData {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  competition: string;
}

// News types
export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  category: string;
}

// Team standings types
export interface TeamStanding {
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
