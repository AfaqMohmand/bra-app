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
    <div className="bg-white p-6 rounded-xl shadow-lg gradient-border relative overflow-hidden animate-fadeIn">
      <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 opacity-10 transform rotate-45 translate-x-8 -translate-y-8 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-200 opacity-10 transform rotate-12 -translate-x-10 translate-y-10 rounded-full blur-xl"></div>
      
      <div className="flex items-center justify-center mb-6">
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
      
      <h3 className="text-xl font-serif font-semibold text-center mb-2 animate-fadeIn animate-delay-100">Bra Size Chart</h3>
      <p className="text-center text-sm text-gray-500 mb-6 animate-fadeIn animate-delay-200">
        Find your perfect fit with our comprehensive size chart
      </p>
      
      {/* Chart controls */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 animate-fadeIn animate-delay-300">
        <div className="relative w-full sm:w-auto">
          <select 
            value={chartRegion} 
            onChange={(e) => setChartRegion(e.target.value)}
            className="appearance-none w-full px-8 py-4 text-sm font-medium bg-white border border-yellow-200 rounded-full shadow-md text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent pr-12"
          >
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="EU">EU</option>
            <option value="FR">FR</option>
            <option value="IT">IT</option>
            <option value="Pak/Ind">Pak/Ind</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
            <div className="w-4 h-4 border-t-2 border-r-2 border-yellow-500 transform rotate-45 -translate-y-1"></div>
          </div>
        </div>

        <div className="inline-flex rounded-full overflow-hidden shadow-md">
          <button
            className={`px-8 py-3 text-sm font-medium transition-all ${
              chartUnit === "in"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-inner"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setChartUnit("in")}
          >
            Inches
          </button>
          <button
            className={`px-8 py-3 text-sm font-medium transition-all ${
              chartUnit === "cm"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-inner"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setChartUnit("cm")}
          >
            Centimeters
          </button>
        </div>
      </div>

      {/* Size chart table */}
      <div className="overflow-x-auto rounded-lg shadow-md animate-fadeIn animate-delay-400 p-1">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-yellow-50 to-yellow-100">
              <th className="py-4 px-6 border-b border-r border-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                {chartUnit === "in" ? "Band (inches)" : "Band (cm)"}
              </th>
              {braSizeChartData[chartRegion]?.headers?.slice(1).map((header, index) => (
                <th
                  key={index}
                  className="py-4 px-6 border-b border-r border-gray-200 text-center text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {braSizeChartData[chartRegion]?.rows?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-yellow-50"}
              >
                <td className="px-6 py-3 text-sm text-center font-medium text-gray-900 border-r border-gray-200 hover:bg-yellow-50 transition-colors">
                  {row.band}
                </td>
                <td className="px-6 py-3 text-sm text-center text-gray-500 border-r border-gray-200 hover:bg-yellow-50 transition-colors">
                  {convertMeasurement(row.underbust, chartUnit)}
                </td>
                <td className="px-6 py-3 text-sm text-center text-gray-500 border-r border-gray-200 hover:bg-yellow-50 transition-colors">
                  {convertMeasurement(row.cupA, chartUnit)}
                </td>
                <td className="px-6 py-3 text-sm text-center text-gray-500 border-r border-gray-200 hover:bg-yellow-50 transition-colors">
                  {convertMeasurement(row.cupB, chartUnit)}
                </td>
                <td className="px-6 py-3 text-sm text-center text-gray-500 border-r border-gray-200 hover:bg-yellow-50 transition-colors">
                  {convertMeasurement(row.cupC, chartUnit)}
                </td>
                <td className="px-6 py-3 text-sm text-center text-gray-500 border-r border-gray-200 hover:bg-yellow-50 transition-colors">
                  {convertMeasurement(row.cupD, chartUnit)}
                </td>
                <td className="px-6 py-3 text-sm text-center text-gray-500 border-r border-gray-200 hover:bg-yellow-50 transition-colors">
                  {convertMeasurement(row.cupE, chartUnit)}
                </td>
                <td className="px-6 py-3 text-sm text-center text-gray-500 hover:bg-yellow-50 transition-colors">
                  {convertMeasurement(row.cupF, chartUnit)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Size chart note */}
      <div className="mt-8 text-center text-sm text-gray-500 animate-fadeIn animate-delay-500">
        <div className="max-w-2xl mx-auto bg-yellow-50 p-4 rounded-lg border border-yellow-100 shadow-sm">
          <div className="flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Size Chart Note</span>
          </div>
          <p>
            This chart provides standard sizing conversions. Actual sizes may vary
            by brand and style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BraSizeChartInteractive;
