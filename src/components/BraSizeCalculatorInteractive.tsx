"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BraSizeData, RecommendedSize } from "../types/braSizeTypes";
import Image from "next/image";
import underbustSvg from "../assets/underbust-cup.svg";
import overbustSvg from "../assets/overbust-cup.svg";
import HowToMeasure from "./howToMeasrure";

interface BraSizeCalculatorInteractiveProps {
  braSizeData: BraSizeData;
  onSizeCalculated: (size: RecommendedSize) => void;
}

const BraSizeCalculatorInteractive: React.FC<
  BraSizeCalculatorInteractiveProps
> = ({ braSizeData, onSizeCalculated }) => {
  const [unit, setUnit] = useState("inches");
  const [bandMeasurement, setBandMeasurement] = useState("");
  const [bustMeasurement, setBustMeasurement] = useState("");
  const [showBandTooltip, setShowBandTooltip] = useState(false);
  const [showBustTooltip, setShowBustTooltip] = useState(false);

  // Calculate bra size based on measurements
  const calculateBraSize = useCallback((): RecommendedSize => {
    if (!bandMeasurement || !bustMeasurement) return null;

    let band = parseFloat(bandMeasurement);
    let bust = parseFloat(bustMeasurement);

    if (isNaN(band) || isNaN(bust)) return null;

    // Convert cm to inches if needed
    if (unit === "centimeters") {
      band = band / 2.54;
      bust = bust / 2.54;
    }

    // Calculate band size (round to nearest even number)
    let bandSize = Math.round(band / 2) * 2;
    if (band < 33) bandSize += 4;
    else bandSize += 0;

    // Calculate cup size (difference between bust and band)
    const difference = Math.round(bust - band);
    const cupSize =
      braSizeData.cupSizes.inches[
        difference as keyof typeof braSizeData.cupSizes.inches
      ] || null;

    if (!cupSize) return { isInvalid: true, bandSize: 0, cupSize: "" };

    return { bandSize, cupSize };
  }, [bandMeasurement, bustMeasurement, unit, braSizeData]);

  // Update recommended size when measurements change
  useEffect(() => {
    const baseSize = calculateBraSize();
    if (baseSize) {
      onSizeCalculated(baseSize);
    }
  }, [
    bandMeasurement,
    bustMeasurement,
    unit,
    calculateBraSize,
    onSizeCalculated,
  ]);

  // Handle unit change
  const handleUnitChange = (newUnit: string) => {
    setUnit(newUnit);
    setBandMeasurement("");
    setBustMeasurement("");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden h-full animate-fadeIn gradient-border">
      {/* Consistent border style with the right side */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 opacity-10 transform rotate-45 translate-x-8 -translate-y-8 rounded-full blur-xl"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 opacity-20 transform rotate-45 translate-x-8 -translate-y-8 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-200 opacity-20 transform rotate-12 -translate-x-10 translate-y-10 rounded-full blur-xl"></div>

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
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-center mb-2 animate-fadeIn animate-delay-200 font-serif">
        Enter Your Measurements
      </h3>
      <p className="text-center text-sm text-gray-600 mb-6 animate-fadeIn animate-delay-300">
        Measure around your body for the most accurate results
      </p>

      {/* Unit toggle */}
      <div className="flex justify-center mb-8 animate-fadeIn animate-delay-400">
        <div className="inline-flex rounded-full overflow-hidden shadow-md">
          <button
            className={`px-6 py-2.5 text-sm font-medium transition-all ${
              unit === "inches"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-inner"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => handleUnitChange("inches")}
          >
            Inches
          </button>
          <button
            className={`px-6 py-2.5 text-sm font-medium transition-all ${
              unit === "centimeters"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-inner"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => handleUnitChange("centimeters")}
          >
            Centimeters
          </button>
        </div>
      </div>

      {/* Measurement inputs */}
      <div className="space-y-8 animate-fadeIn animate-delay-500">
        <div className="px-5">
          <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
            Band Measurement
            <div
              className="ml-2 cursor-pointer relative"
              onMouseEnter={() => setShowBandTooltip(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
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
            </div>
          </label>
          <div className="relative">
            <div className="flex items-center">
              <input
                type="number"
                value={bandMeasurement}
                onChange={(e) => setBandMeasurement(e.target.value)}
                className="block w-full px-6 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md"
                placeholder={`Enter band measurement in ${unit}`}
              />
              {/* <span className="ml-3 text-gray-600 font-medium">{unit}</span> */}
            </div>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Measure around your ribcage, just under your bust
          </p>

          {/* Band Size Tooltip */}
          {showBandTooltip && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-xl shadow-2xl border-2 border-yellow-300 max-w-2xl w-full mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-yellow-600">
                    How to Measure Band Size
                  </h3>
                  <button
                    onClick={() => setShowBandTooltip(false)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
                    <Image
                      src={underbustSvg}
                      alt="Band Size Measurement"
                      className="w-full"
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-4">
                    <h4 className="font-medium text-lg mb-2">
                      Band Size Instructions:
                    </h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Stand straight in front of a mirror wearing a non-padded
                        bra.
                      </li>
                      <li>
                        Wrap the measuring tape around your ribcage, directly
                        under your bust.
                      </li>
                      <li>
                        The tape should be snug but not tight - you should be
                        able to breathe comfortably.
                      </li>
                      <li>
                        Make sure the tape is parallel to the floor all the way
                        around.
                      </li>
                      <li>Round to the nearest whole number.</li>
                    </ol>
                    <p className="mt-4 text-sm text-gray-600">
                      This measurement is crucial for proper support as the band
                      provides 80% of a bra&apos;s support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="px-5">
          <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
            Bust Measurement
            <div
              className="ml-2 cursor-pointer relative"
              onMouseEnter={() => setShowBustTooltip(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
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
            </div>
          </label>
          <div className="relative">
            <div className="flex items-center">
              <input
                type="number"
                value={bustMeasurement}
                onChange={(e) => setBustMeasurement(e.target.value)}
                className="block w-full px-6 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md"
                placeholder={`Enter bust measurement in ${unit}`}
              />
              {/* <span className="ml-3 text-gray-600 font-medium">{unit}</span> */}
            </div>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Measure around the fullest part of your bust
          </p>

          {/* Bust Size Tooltip */}
          {showBustTooltip && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-xl shadow-2xl border-2 border-yellow-300 max-w-2xl w-full mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-yellow-600">
                    How to Measure Bust Size
                  </h3>
                  <button
                    onClick={() => setShowBustTooltip(false)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
                    <Image
                      src={overbustSvg}
                      alt="Bust Size Measurement"
                      className="w-full"
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-4">
                    <h4 className="font-medium text-lg mb-2">
                      Bust Size Instructions:
                    </h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Stand straight in front of a mirror wearing a non-padded
                        bra.
                      </li>
                      <li>
                        Wrap the measuring tape around your back and across the
                        fullest part of your bust.
                      </li>
                      <li>
                        The tape should be snug but not tight - it should not
                        compress your breast tissue.
                      </li>
                      <li>
                        Make sure the tape is parallel to the floor all the way
                        around.
                      </li>
                      <li>Round to the nearest whole number.</li>
                    </ol>
                    <p className="mt-4 text-sm text-gray-600">
                      This measurement helps determine your cup size when
                      compared to your band measurement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* How to Measure Guide */}
        <HowToMeasure />
      </div>
    </div>
  );
};

export default BraSizeCalculatorInteractive;
