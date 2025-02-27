import { NextResponse } from 'next/server';
import { scrapeLiveScores } from '@/lib/scraper';

export async function GET() {
  try {
    const liveScores = await scrapeLiveScores();
    return NextResponse.json({ success: true, data: liveScores });
  } catch (error) {
    console.error('API error fetching live scores:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch live scores' },
      { status: 500 }
    );
  }
}

// Prevent this route from being statically generated
export const dynamic = 'force-dynamic';
