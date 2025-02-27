import axios from 'axios';
import * as cheerio from 'cheerio';
import { MatchData } from '@/types';

/**
 * Scrapes live scores from a public football website
 * @returns Promise<Array> Live match data
 */
export async function scrapeLiveScores(): Promise<MatchData[]> {
  try {
    // We're using a sample site - in production, replace with an actual source
    const response = await axios.get('https://www.flashscore.co.tz/football/tanzania/premier-league/');
    
    const html = response.data;
    const $ = cheerio.load(html);
    
    const matches: MatchData[] = [];
    
    // This selector would need to be adjusted based on the actual site structure
    // This is a simplified example
    $('.event__match').each((index, element) => {
      const homeTeam = $(element).find('.event__participant--home').text().trim();
      const awayTeam = $(element).find('.event__participant--away').text().trim();
      const homeScore = $(element).find('.event__score--home').text().trim();
      const awayScore = $(element).find('.event__score--away').text().trim();
      const matchTime = $(element).find('.event__time').text().trim();
      const matchStatus = $(element).find('.event__stage').text().trim();
      
      matches.push({
        id: `match-${index}`,
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        matchTime,
        matchStatus,
      });
    });
    
    return matches;
  } catch (error) {
    console.error('Error scraping live scores:', error);
    return [];
  }
}

/**
 * Scrapes match details for a specific match
 * @param matchId The ID of the match to get details for
 * @returns Promise<Object> Match details
 */
export async function scrapeMatchDetails(matchId: string): Promise<MatchData> {
  try {
    // In a real app, this would scrape from an actual site
    // For demonstration, we're returning mock data
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      id: matchId,
      homeTeam: 'Simba SC',
      awayTeam: 'Young Africans',
      homeScore: '2',
      awayScore: '1',
      matchTime: '75\'',
      matchStatus: 'In Progress',
      venue: 'Benjamin Mkapa Stadium',
      attendance: '60,000',
      referee: 'John Makwata',
      homeTeamLineup: [
        'Aishi Manula', 'Shomari Kapombe', 'Joash Onyango', 'Pascal Wawa',
        'Hussein Mohamed', 'Taddeo Lwanga', 'Jonas Mkude', 'Clatous Chama',
        'Luis Miquissone', 'Meddie Kagere', 'John Bocco'
      ],
      awayTeamLineup: [
        'Metacha Mnata', 'Bakari Mwamnyeto', 'Lamine Moro', 'Dickson Job',
        'Feisal Salum', 'Mukoko Tonombe', 'Kasim Haidar', 'Tuisila Kisinda',
        'Farid Mussa', 'Fiston Mayele', 'Deus Kaseke'
      ],
      events: [
        { time: '23\'', team: 'home', type: 'goal', player: 'John Bocco' },
        { time: '45\'', team: 'away', type: 'goal', player: 'Fiston Mayele' },
        { time: '67\'', team: 'home', type: 'goal', player: 'Meddie Kagere' }
      ]
    };
  } catch (error) {
    console.error('Error scraping match details:', error);
    throw new Error('Failed to fetch match details');
  }
}
