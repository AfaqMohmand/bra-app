"use client";

import React, { useState, useCallback } from "react";
import {
  BraSizeData,
  BraSizeChartData,
  RecommendedSize,
} from "../types/braSizeTypes";
import BraSizeCalculatorInteractive from "./BraSizeCalculatorInteractive";
import BraSizeChartInteractive from "./BraSizeChartInteractive";
import NoMeasurementData from "./layout/noMeasrumentData";
import DetailBraSizeChart from "./braSizeChart";

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
  const handleSizeCalculated = useCallback(
    (size: RecommendedSize) => {
      if (JSON.stringify(size) !== JSON.stringify(recommendedSize)) {
        setRecommendedSize(size);
      }
    },
    [recommendedSize]
  );

  // Get size for specific region
  const getSizeForRegion = (
    region: string,
    baseSize: {
      bandSize: number;
      cupSize: string;
      bustBandDifference?: number;
    } | null
  ): string | null => {
    if (!baseSize) return null;

    const { bandSize, bustBandDifference } = baseSize;
    const regionData =
      braSizeData.regionConversions[
        region as keyof typeof braSizeData.regionConversions
      ];

    if (!regionData) return null;

    // Calculate the adjusted band size for the region
    const adjustedBand = bandSize + regionData.bandAdjustment;

    // Get the correct cup size for this region based on the bust-band difference
    let adjustedCup = "";

    // If we have the bust-band difference, use it to get the cup size directly from the table
    if (bustBandDifference !== undefined) {
      const differenceKey = bustBandDifference.toString();

      // Look up the cup size for this region based on the difference
      if (region === "EU" || region === "FR") {
        // For EU and FR, get cup size from their respective tables
        adjustedCup =
          braSizeData.cupSizes[region.toLowerCase()]?.[differenceKey] || "";
      } else if (region === "UK") {
        // For UK, get cup size from its table
        adjustedCup = braSizeData.cupSizes.uk?.[differenceKey] || "";
      } else if (region === "Pak/Ind") {
        // For Pak/Ind, get cup size from its table
        adjustedCup = braSizeData.cupSizes.pakInd?.[differenceKey] || "";
      } else {
        // Default to US cup size
        adjustedCup = braSizeData.cupSizes.us[differenceKey] || "";
      }
    }

    // If we couldn't get the cup size from the difference, fall back to the mapping
    if (!adjustedCup && baseSize.cupSize) {
      adjustedCup =
        regionData.cupMapping[
          baseSize.cupSize as keyof typeof regionData.cupMapping
        ] || baseSize.cupSize;
    }

    // Use the band size conversion table from the JSON file
    const bandSizeStr = String(bandSize);
    const bandSizeData = braSizeData.bandSizes.inches[bandSizeStr];

    if (bandSizeData) {
      if (region === "EU") {
        return `${bandSizeData.eu}${adjustedCup}`;
      }

      if (region === "FR") {
        return `${bandSizeData.fr}${adjustedCup}`;
      }

      if (region === "Pak/Ind") {
        return `${bandSizeData.pakInd}${adjustedCup}`;
      }

      if (region === "AU") {
        // For AU, we'll use the usUk value since that's what's in the table
        return `${bandSizeData.usUk}${adjustedCup}`;
      }
    }

    return `${String(adjustedBand)}${adjustedCup}`;
  };

  return (
    <div className="px-3 sm:px-2 md:px-0">
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
          {recommendedSize === null ? (
            <NoMeasurementData />
          ) : recommendedSize.isInvalid ? (
            <div className="bg-white p-6 rounded-xl shadow-lg h-full gradient-border animate-fadeIn">
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 opacity-10 transform rotate-45 translate-x-8 -translate-y-8 rounded-full blur-xl"></div> */}

              <div className="flex items-center justify-center mb-6 animate-fadeIn animate-delay-100 mt-5">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-4 shadow-lg animate-pulse">
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
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-3 font-rubik animate-fadeIn animate-delay-200">
                Invalid Size
              </h3>

              <div className="text-center my-6 animate-fadeIn animate-delay-300">
                {recommendedSize?.errorMessage ? (
                  <p className="text-lg text-gray-700 mb-4">
                    {recommendedSize.errorMessage}
                  </p>
                ) : (
                  <>
                    <p className="text-lg text-gray-700 mb-4">
                      The measurements you entered don&apos;t correspond to a
                      standard bra size.
                    </p>
                    <p className="text-md text-gray-600">
                      Please double-check your measurements and try again, or
                      consider getting professionally fitted.
                    </p>
                  </>
                )}
              </div>
            </div>
          ) : recommendedSize ? (
            <div className="bg-white p-6 rounded-xl shadow-lg h-full gradient-border animate-fadeIn">
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 opacity-10 transform rotate-45 translate-x-8 -translate-y-8 rounded-full blur-xl"></div> */}

              <div className="flex items-center justify-center mb-6 animate-fadeIn animate-delay-100 mt-5">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-4 shadow-lg animate-pulse">
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

              <h3 className="text-2xl font-bold text-center mb-3 font-rubik animate-fadeIn animate-delay-200">
                Your Recommended Size
              </h3>

              <div className="text-5xl font-bold text-center my-6 animate-fadeIn animate-delay-300 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400">
                  {activeRegion === "AU"
                    ? `${
                        braSizeData.bandSizes.inches[
                          recommendedSize.bandSize.toString()
                        ]?.aus || ""
                      }${
                        recommendedSize.bustBandDifference !== undefined
                          ? braSizeData.cupSizes.aus?.[
                              recommendedSize.bustBandDifference.toString()
                            ] || recommendedSize.cupSize
                          : recommendedSize.cupSize
                      }`
                    : activeRegion === "US"
                    ? `${recommendedSize.bandSize}${recommendedSize.cupSize}`
                    : getSizeForRegion(activeRegion, recommendedSize)}
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full"></div>
              </div>
              <p className="text-center text-sm font-medium text-gray-600 mb-6 animate-fadeIn animate-delay-400">
                {activeRegion === "AU"
                  ? "AU Dress Size"
                  : `${activeRegion} Size`}
                {activeRegion === "AU" && (
                  <span className="block text-xs mt-1">
                    (bra size: {getSizeForRegion(activeRegion, recommendedSize)}
                    )
                  </span>
                )}
              </p>

              {/* Only display band size in centimeters */}
              {recommendedSize.unit === "centimeters" && (
                <div className="text-center text-sm text-gray-500 -mt-4 mb-4">
                  <span>
                    Band: {(recommendedSize.bandSize * 2.54).toFixed(1)} cm
                  </span>
                </div>
              )}

              <div className="mb-8 animate-fadeIn animate-delay-500">
                <h4 className="text-center font-medium text-gray-700 mb-4">
                  International Size Chart
                </h4>
                <div className="grid grid-cols-3 gap-2 mx-auto px-2 w-[85%]">
                  <button
                    onClick={() => setActiveRegion("Pak/Ind")}
                    className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                      activeRegion === "Pak/Ind"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    Pak/Ind
                  </button>
                  <button
                    onClick={() => setActiveRegion("US")}
                    className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                      activeRegion === "US"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    US
                  </button>
                  <button
                    onClick={() => setActiveRegion("UK")}
                    className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                      activeRegion === "UK"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    <span className="inline-block transition-transform duration-300 hover:-translate-y-1">
                      UK
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveRegion("EU")}
                    className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                      activeRegion === "EU"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    <span className="inline-block transition-transform duration-300 hover:-translate-y-1">
                      EU
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveRegion("FR")}
                    className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                      activeRegion === "FR"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    <span className="inline-block transition-transform duration-300 hover:-translate-y-1">
                      FR
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveRegion("AU")}
                    className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                      activeRegion === "AU"
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-sm"
                    }`}
                  >
                    <span className="inline-block transition-transform duration-300 hover:-translate-y-1">
                      AU
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center animate-fadeIn animate-delay-500 px-2 mt-4 sm:mt-6 pb-[20px] sm:pb-0">
                <div className="grid grid-cols-2 gap-3 w-3/5">
                  <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all bg-white text-center">
                    <p className="text-sm text-gray-500 mt-2 mb-1 font-medium">
                      Band Size
                    </p>
                    <h6 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 mb-2">
                      {recommendedSize.bandSize}
                    </h6>
                  </div>
                  <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all bg-white text-center">
                    <p className="text-sm text-gray-500 mt-2 mb-1 font-medium">
                      Cup Size
                    </p>
                    <h6 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 mb-2">
                      {activeRegion === "Pak/Ind" || activeRegion === "AU"
                        ? recommendedSize.bustBandDifference !== undefined
                          ? braSizeData.cupSizes[
                              activeRegion === "Pak/Ind" ? "pakInd" : "aus"
                            ]?.[
                              recommendedSize.bustBandDifference.toString()
                            ] || recommendedSize.cupSize
                          : recommendedSize.cupSize
                        : recommendedSize.cupSize}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Size chart section */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <DetailBraSizeChart />
        <BraSizeChartInteractive braSizeChartData={braSizeChartData} />
      </div>
    </div>
  );
};

export default BraSizeCalculatorWrapper;
