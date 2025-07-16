export const Dropdown = ({
  chartRegion,
  setChartRegion,
}: {
  chartRegion: string;
  setChartRegion: (region: string) => void;
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      {/* Region Selector */}
      <div className="mb-4 md:mb-0">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Region:
        </label>
        <div className="relative">
          <select
            value={chartRegion}
            onChange={(e) => setChartRegion(e.target.value)}
            className="block w-full pl-4 pr-8 py-2.5 text-base border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm rounded-lg bg-gradient-to-r from-yellow-50 to-white shadow-sm appearance-none transition-all duration-200 hover:border-yellow-400"
            style={{ fontWeight: "500" }}
          >
            <option value="Pak/Ind">Pakistan/India (Pak/Ind)</option>
            <option value="US">United States (US)</option>
            <option value="UK">United Kingdom (UK)</option>
            <option value="EU">Europe (EU)</option>
            <option value="FR">France (FR)</option>
            <option value="JP">Japan (JP)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center shadow-sm">
              <svg
                className="h-3 w-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
