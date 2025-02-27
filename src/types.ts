export interface MatchData {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
  status: string;
  minute: number;
  date: string;
}

export interface TeamData {
  id: string;
  name: string;
  shortName: string;
  logo?: string;
  position?: number;
  played?: number;
  won?: number;
  drawn?: number;
  lost?: number;
  goalsFor?: number;
  goalsAgainst?: number;
  points?: number;
  form?: string[];
}

export interface FixtureData {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time?: string;
  venue: string;
  competition: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  image?: string;
  date: string;
  author: string;
  category: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  icon?: string;
}
