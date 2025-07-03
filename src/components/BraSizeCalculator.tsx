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
    <div className="bra-size-calculator max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(242, 201, 76, 0.15) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(242, 201, 76, 0.15) 2%, transparent 0%)`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>
        <div className="relative rounded-lg">
          <BraSizeCalculatorWrapper
            braSizeData={braSizeData}
            braSizeChartData={braSizeChartData}
          />
          <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-100 pt-8 animate-fadeIn animate-delay-300">
            <div className="max-w-2xl mx-auto bg-yellow-50 p-4 rounded-lg border border-yellow-100 shadow-sm">
              <div className="flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Important Note</span>
              </div>
              <p className="mb-2">
                This calculator provides an estimate based on industry
                standards. For the best fit, we recommend getting professionally
                measured.
              </p>
              <p>
                Remember that bra sizes can vary between brands and styles. Use
                this as a starting point for your perfect fit journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BraSizeCalculator;
