"use client";

import React from "react";
import { BraSizeData, RecommendedSize } from "../types/braSizeTypes";

interface RegionSelectorInteractiveProps {
  braSizeData: BraSizeData;
  recommendedSize: RecommendedSize;
  activeRegion: string;
  setActiveRegion: (region: string) => void;
}

const RegionSelectorInteractive: React.FC<RegionSelectorInteractiveProps> = ({
  braSizeData,
  recommendedSize,
  activeRegion,
  setActiveRegion
}) => {
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
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">
        International Size Conversion
      </h3>
      <p className="text-center text-sm text-gray-500 mb-4">
        See your size in different regional standards
      </p>

      {/* Region selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1 text-center">
            Select Region
          </label>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(braSizeData.regionConversions).map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeRegion === region
                    ? "bg-yellow-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-yellow-200"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Size display */}
      {recommendedSize && (
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Your size in {activeRegion}:</p>
          <div className="text-3xl font-bold text-yellow-600 mb-2">
            {getSizeForRegion(activeRegion, recommendedSize)}
          </div>
          <p className="text-xs text-gray-500">
            {braSizeData.regionConversions[
              activeRegion as keyof typeof braSizeData.regionConversions
            ]?.bandAdjustment !== 0 && (
              <span>
                {activeRegion} uses a{" "}
                {braSizeData.regionConversions[
                  activeRegion as keyof typeof braSizeData.regionConversions
                ]?.bandAdjustment > 0
                  ? "larger"
                  : "smaller"}{" "}
                band size than US standard.
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default RegionSelectorInteractive;
