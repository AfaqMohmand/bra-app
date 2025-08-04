// This is a server component
import React from "react";
// import Image from "next/image";
import braSizeDataJson from "./BraSizeData.json";
import { BraSizeData, BraSizeChartData } from "../types/braSizeTypes";
import BraSizeCalculatorWrapper from "./BraSizeCalculatorWrapper";
const BraSizeCalculator = () => {
  // Extract data from imported JSON - this is fine on server
  const braSizeData: BraSizeData = braSizeDataJson.braSizeData;
  const braSizeChartData: BraSizeChartData = braSizeDataJson.braSizeChartData;

  return (
    <div className="bra-size-calculator sm:px-6 pt-12 animate-fadeIn">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>
        <div className="relative rounded-lg">
          <BraSizeCalculatorWrapper
            braSizeData={braSizeData}
            braSizeChartData={braSizeChartData}
          />
        </div>
      </div>
    </div>
  );
};

export default BraSizeCalculator;
