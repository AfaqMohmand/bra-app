"use client";

import React, { useState } from "react";
import { BraSizeChartData } from "../types/braSizeTypes";

interface BraSizeChartInteractiveProps {
  braSizeChartData: BraSizeChartData;
  initialRegion?: string;
  initialUnit?: string;
}

const BraSizeChartInteractive: React.FC<BraSizeChartInteractiveProps> = ({
  braSizeChartData,
  initialRegion = "US",
  initialUnit = "in",
}) => {
  const [chartUnit, setChartUnit] = useState(initialUnit);
  const [chartRegion, setChartRegion] = useState(initialRegion);

  // Convert measurements between units for the chart
  const convertMeasurement = (value: string, targetUnit: string): string => {
    if (!value) return value;

    // Check if the value is a range (e.g., "58.5-63.5")
    if (value.includes("-")) {
      const [min, max] = value.split("-");

      if (targetUnit === "in" && chartUnit === "cm") {
        // Convert from cm to inches
        const minInches = (parseFloat(min) / 2.54).toFixed(1);
        const maxInches = (parseFloat(max) / 2.54).toFixed(1);
        return `${minInches}-${maxInches}`;
      } else if (targetUnit === "cm" && chartUnit === "in") {
        // Convert from inches to cm
        const minCm = (parseFloat(min) * 2.54).toFixed(1);
        const maxCm = (parseFloat(max) * 2.54).toFixed(1);
        return `${minCm}-${maxCm}`;
      }
    }

    return value;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-300 opacity-30 transform rotate-45 translate-x-8 -translate-y-8"></div>
      <div className="flex items-center justify-center mb-4">
        <div className="bg-yellow-500 rounded-full p-3 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
      <h3 className="text-xl font-semibold text-center mb-2">Bra Size Chart</h3>
      <p className="text-center text-sm text-gray-500 mb-4">
        Find your perfect fit with our comprehensive size chart
      </p>

      {/* Chart controls */}
      <div className="flex justify-center mb-6">
        <div className="grid grid-cols-2 gap-4 max-w-md w-full">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Region
            </label>
            <select
              value={chartRegion}
              onChange={(e) => setChartRegion(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            >
              {Object.keys(braSizeChartData).map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Unit
            </label>
            <select
              value={chartUnit}
              onChange={(e) => setChartUnit(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="in">Inches</option>
              <option value="cm">Centimeters</option>
            </select>
          </div>
        </div>
      </div>

      {/* Size chart table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
          <thead className="bg-yellow-50">
            <tr>
              {braSizeChartData[chartRegion]?.headers?.map((header, index) => (
                <th
                  key={index}
                  className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center border-r border-gray-200 last:border-r-0"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {braSizeChartData[chartRegion]?.rows?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-yellow-50"}
              >
                <td className="px-3 py-2 text-sm text-center font-medium text-gray-900 border-r border-gray-200">
                  {row.band}
                </td>
                <td className="px-3 py-2 text-sm text-center text-gray-500 border-r border-gray-200">
                  {convertMeasurement(row.underbust, chartUnit)}
                </td>
                <td className="px-3 py-2 text-sm text-center text-gray-500 border-r border-gray-200">
                  {convertMeasurement(row.cupA, chartUnit)}
                </td>
                <td className="px-3 py-2 text-sm text-center text-gray-500 border-r border-gray-200">
                  {convertMeasurement(row.cupB, chartUnit)}
                </td>
                <td className="px-3 py-2 text-sm text-center text-gray-500 border-r border-gray-200">
                  {convertMeasurement(row.cupC, chartUnit)}
                </td>
                <td className="px-3 py-2 text-sm text-center text-gray-500 border-r border-gray-200">
                  {convertMeasurement(row.cupD, chartUnit)}
                </td>
                <td className="px-3 py-2 text-sm text-center text-gray-500 border-r border-gray-200">
                  {convertMeasurement(row.cupE, chartUnit)}
                </td>
                <td className="px-3 py-2 text-sm text-center text-gray-500">
                  {convertMeasurement(row.cupF, chartUnit)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BraSizeChartInteractive;
