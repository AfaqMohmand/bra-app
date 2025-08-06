export default function NoMeasurementData() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-full flex items-center justify-center gradient-border animate-fadeIn">
      <div className="text-center text-gray-500 animate-pulse">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-yellow-100 opacity-50 blur-lg"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium mb-2">Enter your measurements</h3>
        <p className="text-sm text-gray-400">
          Your recommended size will appear here
        </p>
      </div>
    </div>
  );
}
