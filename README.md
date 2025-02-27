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

- **Frontend**: Next.js 13.5.6 with TypeScript and Tailwind CSS
- **UI Framework**: React 18.2.0
- **Data**: Mock data (API integration planned for future)
- **Styling**: Tailwind CSS for responsive design
- **Animation**: CSS transitions (Framer Motion integration to be added in future)
- **Deployment**: Vercel

## Current Status

This project is in active development. We're currently using mock data for all features, with plans to integrate real API data in the future.

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

- Currently using mock data for all features
- Future plans include integration with public football APIs and web scraping

## Deployment

The app can be deployed to Vercel with the following command:

```bash
npm run build
```

## License

This project is licensed under the MIT License.
