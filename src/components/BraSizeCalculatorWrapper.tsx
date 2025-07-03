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
      <div className="text-center mb-10 animate-fadeIn">
        <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 font-serif">
          PROFESSIONAL BRA SIZE CALCULATOR
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto animate-fadeIn animate-delay-200">
          Get your perfect fit with our accurate bra size calculator. Used by
          thousands of women worldwide for precise measurements.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column - Calculator input */}
        <div className="w-full lg:w-1/2 animate-slideInLeft">
          <BraSizeCalculatorInteractive
            braSizeData={braSizeData}
            onSizeCalculated={handleSizeCalculated}
          />
        </div>

        {/* Right column - Results */}
        <div className="w-full lg:w-1/2 animate-slideInRight">
          {recommendedSize ? (
            <div className="bg-white p-6 rounded-xl shadow-lg h-full gradient-border animate-fadeIn">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 opacity-10 transform rotate-45 translate-x-8 -translate-y-8 rounded-full blur-xl"></div>

              <div className="flex items-center justify-center mb-6 animate-fadeIn animate-delay-100 mt-5">
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-4 shadow-lg animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
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

              <h3 className="text-2xl font-bold text-center mb-3 font-serif animate-fadeIn animate-delay-200">
                Your Recommended Size
              </h3>

              <div className="text-5xl font-bold text-center my-6 animate-fadeIn animate-delay-300 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400">
                  {activeRegion === "US"
                    ? `${recommendedSize.bandSize}${recommendedSize.cupSize}`
                    : getSizeForRegion(activeRegion, recommendedSize)}
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full"></div>
              </div>
              <p className="text-center text-sm font-medium text-gray-600 mb-6 animate-fadeIn animate-delay-400">
                {activeRegion} Size
              </p>

              <div className="mb-8 animate-fadeIn animate-delay-500">
                <h4 className="text-center font-medium text-gray-700 mb-4">
                  International Size Chart
                </h4>
                <div className="grid grid-cols-3 gap-3 p-5">
                  <button
                    onClick={() => setActiveRegion("Pak/Ind")}
                    className={`py-3 px-6 rounded-lg transition-all ${
                      activeRegion === "Pak/Ind"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    Pak/Ind
                  </button>
                  <button
                    onClick={() => setActiveRegion("US")}
                    className={`py-3 px-6 rounded-lg transition-all ${
                      activeRegion === "US"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    US
                  </button>
                  <button
                    onClick={() => setActiveRegion("UK")}
                    className={`py-3 px-6 rounded-lg transition-all ${
                      activeRegion === "UK"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    UK
                  </button>
                  <button
                    onClick={() => setActiveRegion("EU")}
                    className={`py-3 px-6 rounded-lg transition-all ${
                      activeRegion === "EU"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    EU
                  </button>
                  <button
                    onClick={() => setActiveRegion("FR")}
                    className={`py-3 px-6 rounded-lg transition-all ${
                      activeRegion === "FR"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setActiveRegion("IT")}
                    className={`py-3 px-6 rounded-lg transition-all ${
                      activeRegion === "IT"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    IT
                  </button>
                  <button
                    onClick={() => setActiveRegion("AU")}
                    className={`py-3 px-6 rounded-lg transition-all ${
                      activeRegion === "AU"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    AU
                  </button>
                  <button
                    onClick={() => setActiveRegion("JP")}
                    className={`py-3 px-6 rounded-lg transition-all ${
                      activeRegion === "JP"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    JP
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center animate-fadeIn animate-delay-500 px-5">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-all bg-white text-center">
                    <p className="text-sm text-gray-500 mb-1 font-medium">
                      Band Size
                    </p>
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400">
                      {recommendedSize.bandSize}
                    </p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-all bg-white text-center">
                    <p className="text-sm text-gray-500 mb-1 font-medium">
                      Cup Size
                    </p>
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400">
                      {recommendedSize.cupSize}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
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
                <p className="text-xl font-medium mb-2">
                  Enter your measurements
                </p>
                <p className="text-sm text-gray-400">
                  Your recommended size will appear here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Size chart section */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 font-serif">
          DETAILED BRA SIZE CHART
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto mb-8 rounded-full"></div>
        <BraSizeChartInteractive braSizeChartData={braSizeChartData} />
      </div>
    </div>
  );
};

export default BraSizeCalculatorWrapper;
