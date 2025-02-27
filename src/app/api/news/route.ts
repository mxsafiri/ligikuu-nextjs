import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read news from JSON file
    const filePath = path.join(process.cwd(), 'src/data/news.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);
    
    return NextResponse.json({ success: true, data: data.news });
  } catch (error) {
    console.error('API error fetching news:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}

// Cache this response for up to 1 hour
export const revalidate = 3600;
