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
  const fixtures = getFixtures();
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">Fixtures</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Upcoming Tanzania Premier League matches
        </p>
      </div>
      
      {fixtures && fixtures.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fixtures.map((fixture: FixtureData) => (
            <FixtureCard
              key={fixture.id}
              homeTeam={fixture.homeTeam}
              awayTeam={fixture.awayTeam}
              date={fixture.date}
              time={fixture.time}
              venue={fixture.venue}
              competition={fixture.competition}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
          <svg
            className="mb-4 h-12 w-12 text-gray-400 dark:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="mb-2 text-lg font-medium">No Fixtures Available</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            There are no upcoming fixtures at the moment. Check back later.
          </p>
        </div>
      )}
      
      <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h.01a1 1 0 100-2H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Fixture Information
            </h3>
            <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
              <p>
                All match times are shown in East Africa Time (EAT). Fixtures are subject to change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
