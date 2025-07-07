export default function BraSizeChartTable() {
  return (
    <>
      <div className="flex items-center justify-center mb-6 mt-5">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-yellow-100 opacity-50 blur-lg"></div>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-3 shadow-lg relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif font-semibold text-center mb-2 animate-fadeIn animate-delay-100">
        Bra Size Chart
      </h3>
      <p className="text-center text-sm text-gray-500 mb-6 animate-fadeIn animate-delay-200">
        Find your perfect fit with our comprehensive size chart
      </p>
    </>
  );
}
