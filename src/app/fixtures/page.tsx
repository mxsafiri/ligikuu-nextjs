"use client";

import { useState } from "react";
import FixtureCard from "@/components/ui/FixtureCard";
import { FixtureData } from "@/types";

function getFixtures(): FixtureData[] {
  // Mock fixture data
  return [
    {
      id: "1",
      homeTeam: "Simba SC",
      awayTeam: "Young Africans",
      date: "2025-03-01T16:00:00Z",
      time: "16:00",
      venue: "Benjamin Mkapa Stadium",
      competition: "Tanzania Premier League"
    },
    {
      id: "2",
      homeTeam: "Azam FC",
      awayTeam: "Coastal Union",
      date: "2025-03-02T14:00:00Z",
      time: "14:00",
      venue: "Azam Complex Stadium",
      competition: "Tanzania Premier League"
    },
    {
      id: "3",
      homeTeam: "Namungo FC",
      awayTeam: "KMC",
      date: "2025-03-02T16:00:00Z",
      time: "16:00",
      venue: "Majaliwa Stadium",
      competition: "Tanzania Premier League"
    },
    {
      id: "4",
      homeTeam: "Mtibwa Sugar",
      awayTeam: "Mbeya City",
      date: "2025-03-03T14:00:00Z",
      time: "14:00",
      venue: "Jamhuri Stadium",
      competition: "Tanzania Premier League"
    }
  ];
}

export default function FixturesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const fixtures = getFixtures();
  
  return (
    <div className="min-h-screen animate-fade-in">
      {/* Header Section */}
      <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-green-400 p-8 text-white shadow-lg">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Fixtures</h1>
          <p className="mt-2 text-green-50">Upcoming matches in the Tanzania Premier League</p>
        </div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      </div>

      {/* Filters */}
      <div className="mb-8 flex space-x-2 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveFilter("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeFilter === "all"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          All Matches
        </button>
        <button
          onClick={() => setActiveFilter("today")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeFilter === "today"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          Today
        </button>
        <button
          onClick={() => setActiveFilter("tomorrow")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeFilter === "tomorrow"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          Tomorrow
        </button>
        <button
          onClick={() => setActiveFilter("weekend")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeFilter === "weekend"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          This Weekend
        </button>
      </div>

      {/* Featured Match */}
      <div className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Featured Match</h2>
        <FixtureCard
          {...fixtures[0]}
          className="transform transition-all duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* Upcoming Matches Grid */}
      <div>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Upcoming Matches</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {fixtures.slice(1).map((fixture) => (
            <FixtureCard
              key={fixture.id}
              {...fixture}
            />
          ))}
        </div>
      </div>

      {/* No Matches Message */}
      {fixtures.length === 0 && (
        <div className="flex h-64 items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800/50">
          <p className="text-center text-gray-500 dark:text-gray-400">
            No matches scheduled for this period
          </p>
        </div>
      )}
    </div>
  );
}
