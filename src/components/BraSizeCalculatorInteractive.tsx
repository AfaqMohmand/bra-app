"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BraSizeData, RecommendedSize } from "../types/braSizeTypes";
import HowToMeasure from "./howToMeasrure";
import InfoModal from "./InfoModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string | React.ReactNode;
  }>({ title: "", content: "" });

  // Calculate bra size based on measurements
  const calculateBraSize = useCallback((): RecommendedSize => {
    if (!bandMeasurement || !bustMeasurement) return null;

    // Convert measurements to inches if needed
    const bandInches =
      unit === "inches"
        ? parseFloat(bandMeasurement)
        : parseFloat(bandMeasurement) / 2.54;
    const bustInches =
      unit === "inches"
        ? parseFloat(bustMeasurement)
        : parseFloat(bustMeasurement) / 2.54;

    // Return null if either value is not a valid number
    if (isNaN(bandInches) || isNaN(bustInches)) return null;

    // Calculate band size (round to nearest even number)
    let bandSize = Math.round(bandInches / 2) * 2;
    if (bandInches < 33) bandSize += 4;

    // Calculate cup size (difference between bust and band)
    const difference = Math.round(bustInches - bandInches);
    const cupSize =
      braSizeData.cupSizes.inches[
        difference as keyof typeof braSizeData.cupSizes.inches
      ] || null;

    // Only return isInvalid:true when both measurements are provided but result in an invalid size
    if (!cupSize) return { isInvalid: true, bandSize: 0, cupSize: "" };

    return { bandSize, cupSize };
  }, [bandMeasurement, bustMeasurement, unit, braSizeData]);

  // Memoize the effect callback to avoid infinite loops
  const updateRecommendedSize = useCallback(() => {
    const baseSize = calculateBraSize();
    if (baseSize) {
      onSizeCalculated(baseSize);
    }
  }, [calculateBraSize, onSizeCalculated]);

  // Update recommended size when measurements change
  useEffect(() => {
    updateRecommendedSize();
  }, [bandMeasurement, bustMeasurement, unit, updateRecommendedSize]);

  // Handle unit change
  const handleUnitChange = (newUnit: string) => {
    setUnit(newUnit);
    setBandMeasurement("");
    setBustMeasurement("");
  };

  return (
    <>
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
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 animate-fadeIn animate-delay-200 font-rubik">
          Enter Your Measurements
        </h3>
        <p className="text-center text-sm text-gray-600 mb-6 animate-fadeIn animate-delay-300 font-lato">
          Measure around your body for the most accurate results
        </p>

        {/* Unit toggle */}
        <div className="flex justify-center mb-6 sm:mb-8 animate-fadeIn animate-delay-400">
          <div className="inline-flex rounded-full overflow-hidden shadow-md text-xs sm:text-sm">
            <button
              className={`px-4 sm:px-6 py-2 sm:py-2.5 font-medium ${
                unit === "inches"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-inner"
                  : "bg-white text-gray-700 hover:text-yellow-400"
              }`}
              onClick={() => handleUnitChange("inches")}
            >
              Inches
            </button>
            <button
              className={`px-4 sm:px-6 py-2 sm:py-2.5 font-medium ${
                unit === "centimeters"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-inner"
                  : "bg-white text-gray-700 hover:text-yellow-400"
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
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center font-rubik">
              Band Measurement
              <div
                className="ml-2 cursor-pointer relative"
                onClick={() => {
                  setModalContent({
                    title: "Band Measurement",
                    content: (
                      <div>
                        <p className="text-base font-medium mb-4">
                          The band measurement is taken around your ribcage,
                          just under your bust.
                        </p>
                        <p className="text-base font-medium mb-3">
                          For the most accurate results:
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                          <li className="text-base">
                            Make sure the measuring tape is snug but not too
                            tight
                          </li>
                          <li className="text-base">
                            Keep the tape parallel to the floor
                          </li>
                          <li className="text-base">
                            Take a deep breath in and out before measuring
                          </li>
                          <li className="text-base">
                            Measure directly against your skin, not over
                            clothing
                          </li>
                        </ul>
                      </div>
                    ),
                  });
                  setIsModalOpen(true);
                }}
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
                  className="block w-full px-4 sm:px-6 py-3 sm:py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder={`Enter band measurement in ${unit}`}
                />
                {/* <span className="ml-3 text-gray-600 font-medium">{unit}</span> */}
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500 font-lato">
              Measure around your ribcage, just under your bust
            </p>
          </div>

          <div className="px-5">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center font-rubik">
              Bust Measurement
              <div
                className="ml-2 cursor-pointer relative"
                onClick={() => {
                  setModalContent({
                    title: "Bust Measurement",
                    content: (
                      <div>
                        <p className="text-base font-medium mb-4">
                          The bust measurement is taken around the fullest part
                          of your bust.
                        </p>
                        <p className="text-base font-medium mb-3">
                          For the most accurate results:
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                          <li className="text-base">
                            Wear a non-padded bra or no bra for the most
                            accurate measurement
                          </li>
                          <li className="text-base">
                            Keep the tape parallel to the floor
                          </li>
                          <li className="text-base">
                            Make sure the tape is not too tight or too loose
                          </li>
                          <li className="text-base">
                            Stand straight with arms at your sides while
                            measuring
                          </li>
                        </ul>
                      </div>
                    ),
                  });
                  setIsModalOpen(true);
                }}
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
                  className="block w-full px-4 sm:px-6 py-3 sm:py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder={`Enter bust measurement in ${unit}`}
                />
                {/* <span className="ml-3 text-gray-600 font-medium">{unit}</span> */}
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500 font-lato">
              Measure around the fullest part of your bust
            </p>
          </div>

          {/* How to Measure Guide */}
          <HowToMeasure />
        </div>
      </div>
      {/* Info Modal */}
      <InfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </>
  );
};

export default BraSizeCalculatorInteractive;
