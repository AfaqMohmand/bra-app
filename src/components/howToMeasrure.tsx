export default function HowToMeasure() {
  return (
    <div className="px-5 mb-5">
      <div className="mt-8 p-4 bg-yellow-50 border border-t-1 border-t-yellow-200 border-b-0 border-r-0 border-l-0 rounded-lg">
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h4 className="font-medium text-gray-700">How to Measure</h4>
        </div>
        <div className="text-sm text-gray-600">
          <p className="mb-2">
            <strong>Band:</strong> Measure snugly around your ribcage, directly
            under your bust.
          </p>
          <p>
            <strong>Bust:</strong> Measure around the fullest part of your bust
            while wearing a non-padded bra.
          </p>
        </div>
      </div>
    </div>
  );
}
