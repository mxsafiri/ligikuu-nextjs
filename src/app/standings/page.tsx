import StandingsTable from "@/components/ui/StandingsTable";

async function getStandings() {
  try {
    const res = await fetch('/api/standings', { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      throw new Error('Failed to fetch standings');
    }
    
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching standings:', error);
    return [];
  }
}

export default async function StandingsPage() {
  const standings = await getStandings();
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">League Standings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Current Tanzania Premier League table
        </p>
      </div>
      
      {standings && standings.length > 0 ? (
        <StandingsTable standings={standings} />
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mb-2 text-lg font-medium">No Standings Data</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Standings information is currently unavailable. Please check back later.
          </p>
        </div>
      )}
      
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-gray-400"
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
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Table Legend
            </h3>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-sm bg-green-100 dark:bg-green-900/30"></div>
                  <span>CAF Champions League</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-sm bg-red-100 dark:bg-red-900/30"></div>
                  <span>Relegation Zone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
