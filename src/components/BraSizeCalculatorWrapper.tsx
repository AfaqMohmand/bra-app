"use client";

import React, { useState } from "react";
import {
  BraSizeData,
  BraSizeChartData,
  RecommendedSize,
} from "../types/braSizeTypes";
import BraSizeCalculatorInteractive from "./BraSizeCalculatorInteractive";
import BraSizeChartInteractive from "./BraSizeChartInteractive";

interface BraSizeCalculatorWrapperProps {
  braSizeData: BraSizeData;
  braSizeChartData: BraSizeChartData;
}

const BraSizeCalculatorWrapper: React.FC<BraSizeCalculatorWrapperProps> = ({
  braSizeData,
  braSizeChartData,
}) => {
  // All client-side state is managed here
  const [recommendedSize, setRecommendedSize] = useState<RecommendedSize>(null);
  const [activeRegion, setActiveRegion] = useState<string>("US");

  // Handler for when size is calculated in the interactive component
  const handleSizeCalculated = (size: RecommendedSize) => {
    setRecommendedSize(size);
  };

  // Get size for specific region
  const getSizeForRegion = (
    region: string,
    baseSize: { bandSize: number; cupSize: string } | null
  ): string | null => {
    if (!baseSize) return null;

    const { bandSize, cupSize } = baseSize;
    const regionData =
      braSizeData.regionConversions[
        region as keyof typeof braSizeData.regionConversions
      ];

    if (!regionData) return null;

    const adjustedBand = bandSize + regionData.bandAdjustment;
    const adjustedCup =
      regionData.cupMapping[cupSize as keyof typeof regionData.cupMapping] ||
      cupSize;

    return `${String(adjustedBand)}${adjustedCup}`;
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">
          PROFESSIONAL BRA SIZE CALCULATOR
        </h2>
        <p className="text-gray-600">
          Get your perfect fit with our accurate bra size calculator. Used by
          thousands of women worldwide.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left column - Calculator input */}
        <div className="w-full lg:w-1/2">
          <BraSizeCalculatorInteractive
            braSizeData={braSizeData}
            onSizeCalculated={handleSizeCalculated}
          />
        </div>

        {/* Right column - Results */}
        <div className="w-full lg:w-1/2">
          {recommendedSize ? (
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200 h-full">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-center mb-2">
                Your Recommended Size
              </h3>

              <div className="text-5xl font-bold text-yellow-600 text-center my-6">
                {recommendedSize.bandSize}
                {recommendedSize.cupSize}
              </div>

              <p className="text-center text-sm text-gray-600 mb-4">US Size</p>

              <div className="mb-6">
                <h4 className="text-center text-sm font-medium mb-2">
                  International Size Chart
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setActiveRegion("Pak/Ind")}
                    className={`px-2 py-2 text-xs font-medium transition-all ${
                      activeRegion === "Pak/Ind"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    Pak/Ind
                  </button>
                  <button
                    onClick={() => setActiveRegion("US")}
                    className={`px-2 py-2 text-xs font-medium transition-all ${
                      activeRegion === "US"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    US
                  </button>
                  <button
                    onClick={() => setActiveRegion("UK")}
                    className={`px-2 py-2 text-xs font-medium transition-all ${
                      activeRegion === "UK"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    UK
                  </button>
                  <button
                    onClick={() => setActiveRegion("EU")}
                    className={`px-2 py-2 text-xs font-medium transition-all ${
                      activeRegion === "EU"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    EU
                  </button>
                  <button
                    onClick={() => setActiveRegion("FR")}
                    className={`px-2 py-2 text-xs font-medium transition-all ${
                      activeRegion === "FR"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setActiveRegion("IT")}
                    className={`px-2 py-2 text-xs font-medium transition-all ${
                      activeRegion === "IT"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    IT
                  </button>
                  <button
                    onClick={() => setActiveRegion("AU")}
                    className={`px-2 py-2 text-xs font-medium transition-all ${
                      activeRegion === "AU"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    AU
                  </button>
                  <button
                    onClick={() => setActiveRegion("JP")}
                    className={`px-2 py-2 text-xs font-medium transition-all ${
                      activeRegion === "JP"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    JP
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 mb-1">
                    Your size in {activeRegion}:
                  </p>
                  <div className="text-3xl font-bold text-yellow-600">
                    {getSizeForRegion(activeRegion, recommendedSize)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="border border-gray-200 p-4 rounded text-center">
                    <p className="text-sm text-gray-500 mb-1">Band Size</p>
                    <p className="text-2xl font-bold text-yellow-600">
                      {recommendedSize.bandSize}
                    </p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded text-center">
                    <p className="text-sm text-gray-500 mb-1">Cup Size</p>
                    <p className="text-2xl font-bold text-yellow-600">
                      {recommendedSize.cupSize}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200 h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4 text-yellow-400"
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
                <p className="text-lg font-medium">Enter your measurements</p>
                <p className="text-sm">
                  Your recommended size will appear here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Size chart section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          DETAILED BRA SIZE CHART
        </h2>
        <BraSizeChartInteractive braSizeChartData={braSizeChartData} />
      </div>
    </div>
  );
};

export default BraSizeCalculatorWrapper;
