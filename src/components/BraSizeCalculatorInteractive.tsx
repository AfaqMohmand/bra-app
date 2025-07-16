"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BraSizeData, RecommendedSize } from "../types/braSizeTypes";
import Image from "next/image";
import underbustSvg from "../assets/underbust-cup.svg";
import overbustSvg from "../assets/overbust-cup.svg";
import HowToMeasure from "./howToMeasrure";

// Modal component for measurement instructions
const MeasurementModal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-yellow-300 w-[90%] max-w-[600px] relative">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-yellow-600">{title}</h3>
          <button
            onClick={onClose}
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
        {children}
      </div>
    </div>
  );
};

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

  // Handle tooltip display
  const openBandTooltip = () => {
    setShowBandTooltip(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeBandTooltip = () => {
    setShowBandTooltip(false);
    document.body.style.overflow = ''; // Re-enable scrolling
  };

  const openBustTooltip = () => {
    setShowBustTooltip(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeBustTooltip = () => {
    setShowBustTooltip(false);
    document.body.style.overflow = ''; // Re-enable scrolling
  };

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
              onClick={openBandTooltip}
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

          {/* Band Size Modal */}
          <MeasurementModal 
            isOpen={showBandTooltip}
            onClose={closeBandTooltip}
            title="How to Measure Band Size"
          >
            <div className="flex flex-col md:flex-row items-center justify-center mt-6">
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
          </MeasurementModal>
        </div>

        <div className="px-5">
          <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
            Bust Measurement
            <div
              className="ml-2 cursor-pointer relative"
              onClick={openBustTooltip}
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

          {/* Bust Size Modal */}
          <MeasurementModal 
            isOpen={showBustTooltip}
            onClose={closeBustTooltip}
            title="How to Measure Bust Size"
          >
            <div className="flex flex-col md:flex-row items-center justify-center mt-6">
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
          </MeasurementModal>
        </div>

        {/* How to Measure Guide */}
        <HowToMeasure />
      </div>
    </div>
  );
};

export default BraSizeCalculatorInteractive;
