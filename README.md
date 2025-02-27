# LigiKuu - Tanzania Premier League App

A Next.js web application for the Tanzania Premier League that provides live scores, standings, fixtures, and news.

## Features

- **Live Scores**: Real-time match results scraped from public sources
- **League Standings**: Up-to-date table of the Tanzania Premier League
- **Fixtures**: Upcoming matches calendar
- **News**: Latest news and updates from the league
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Data Fetching**: 
  - Web scraping with Cheerio and Axios
  - Local JSON data storage
- **Styling**: Tailwind CSS for responsive design
- **Deployment**: Vercel

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/               # Next.js app router
│   ├── api/           # API routes
│   ├── fixtures/      # Fixtures page
│   ├── news/          # News pages
│   └── standings/     # Standings page
├── components/        # React components
│   ├── layout/        # Layout components
│   └── ui/            # UI components
├── data/              # JSON data files
└── lib/               # Utility functions
```

## Data Sources

- Live scores are scraped from public football websites using Cheerio
- Standings, fixtures, and news are stored in local JSON files

## Deployment

The app can be deployed to Vercel with the following command:

```bash
npm run build
```

## License

This project is licensed under the MIT License.
