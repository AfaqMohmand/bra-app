export default function SizeChartNote() {
  return (
    <div className="mt-8 text-center text-sm text-gray-500 animate-fadeIn animate-delay-500">
      <div className="max-w-2xl mx-auto bg-yellow-50 p-4 rounded-lg border border-yellow-100 shadow-sm mb-5">
        <div className="flex items-center justify-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">Size Chart Note</span>
        </div>
        <p>
          This chart provides standard sizing conversions. Actual sizes may vary
          by brand and style.
        </p>
      </div>
    </div>
  );
}
