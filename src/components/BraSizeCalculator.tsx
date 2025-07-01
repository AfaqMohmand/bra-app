// This is a server component
import React from "react";
// import Image from "next/image";
import braSizeDataJson from "./BraSizeData.json";
import { BraSizeData, BraSizeChartData } from "../types/braSizeTypes";
import BraSizeCalculatorWrapper from "./BraSizeCalculatorWrapper";
// import bgZigzag from "../assets/bg-zigzag.svg";

const BraSizeCalculator = () => {
  // Extract data from imported JSON - this is fine on server
  const braSizeData: BraSizeData = braSizeDataJson.braSizeData;
  const braSizeChartData: BraSizeChartData = braSizeDataJson.braSizeChartData;

  return (
    <div className="bra-size-calculator max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative bg-white overflow-hidden rounded-xl shadow-xl">
        <div className="absolute inset-0 z-0 opacity-5">
          {/* <Image
            // src={bgZigzag}
            alt="Background pattern"
            className="h-full w-full object-cover"
          /> */}
        </div>
        <div className="relative z-10 p-8">
          <BraSizeCalculatorWrapper
            braSizeData={braSizeData}
            braSizeChartData={braSizeChartData}
          />
          <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-100 pt-8">
            <p className="mb-2">
              This calculator provides an estimate based on industry standards.
              For the best fit, we recommend getting professionally measured.
            </p>
            <p>
              Remember that bra sizes can vary between brands and styles. Use
              this as a starting point for your perfect fit journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BraSizeCalculator;
