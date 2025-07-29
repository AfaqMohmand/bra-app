interface UnitToggleProps {
  chartUnit: string;
  setChartUnit: (unit: string) => void;
}

export default function UnitToggle({
  chartUnit,
  setChartUnit,
}: UnitToggleProps) {
  console.log("this change is done by rayyan");
  console.log("chnages done by samad");
  return (
    <>
      <div className="bg-yellow-100 rounded-full p-1 inline-flex shadow-md">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            chartUnit === "in"
              ? "bg-yellow-500 text-white shadow-sm"
              : "text-gray-600 hover:bg-yellow-200"
          }`}
          onClick={() => setChartUnit("in")}
        >
          Inches
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            chartUnit === "cm"
              ? "bg-yellow-500 text-white shadow-sm"
              : "text-gray-600 hover:bg-yellow-200"
          }`}
          onClick={() => setChartUnit("cm")}
        >
          Centimeters
        </button>
      </div>
    </>
  );
}
