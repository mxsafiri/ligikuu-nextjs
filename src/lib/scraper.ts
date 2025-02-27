import { MatchData } from '@/types';

/**
 * Provides mock live scores instead of scraping from a website
 * @returns Promise<Array> Live match data
 */
export async function scrapeLiveScores(): Promise<MatchData[]> {
  // Mock data for demonstration purposes
  const mockMatches: MatchData[] = [
    {
      id: '1',
      homeTeam: 'Simba SC',
      awayTeam: 'Young Africans',
      homeScore: '2',
      awayScore: '1',
      status: 'LIVE',
      minute: 75,
      date: new Date().toISOString(),
    },
    {
      id: '2',
      homeTeam: 'Azam FC',
      awayTeam: 'Coastal Union',
      homeScore: '0',
      awayScore: '0',
      status: 'LIVE',
      minute: 32,
      date: new Date().toISOString(),
    },
    {
      id: '3',
      homeTeam: 'Mtibwa Sugar',
      awayTeam: 'KMC',
      homeScore: '1',
      awayScore: '2',
      status: 'LIVE',
      minute: 60,
      date: new Date().toISOString(),
    }
  ];
  
  return mockMatches;
}

/**
 * Provides mock match details
 * @param matchId The ID of the match to get details for
 * @returns Promise<MatchData> Match details
 */
export async function scrapeMatchDetails(matchId: string): Promise<MatchData> {
  // Mock data
  const mockMatch: MatchData = {
    id: matchId,
    homeTeam: 'Simba SC',
    awayTeam: 'Young Africans',
    homeScore: '2',
    awayScore: '1',
    status: 'LIVE',
    minute: 75,
    date: new Date().toISOString(),
  };
  
  return mockMatch;
}
