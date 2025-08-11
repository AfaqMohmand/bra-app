"use client";

import { useState } from "react";

export default function DetailBraSizeChart() {
  const [unit, setUnit] = useState<"inches" | "cm">("inches");

  // Band size conversion data
  const bandSizeData = [
    { usUkBand: 28, euBand: 60, frBand: 75, pakIndBand: 28, ausBand: 6 },
    { usUkBand: 30, euBand: 65, frBand: 80, pakIndBand: 30, ausBand: 8 },
    { usUkBand: 32, euBand: 70, frBand: 85, pakIndBand: 32, ausBand: 10 },
    { usUkBand: 34, euBand: 75, frBand: 90, pakIndBand: 34, ausBand: 12 },
    { usUkBand: 36, euBand: 80, frBand: 95, pakIndBand: 36, ausBand: 14 },
    { usUkBand: 38, euBand: 85, frBand: 100, pakIndBand: 38, ausBand: 16 },
    { usUkBand: 40, euBand: 90, frBand: 105, pakIndBand: 40, ausBand: 18 },
    { usUkBand: 42, euBand: 95, frBand: 110, pakIndBand: 42, ausBand: 20 },
    { usUkBand: 44, euBand: 100, frBand: 115, pakIndBand: 44, ausBand: 22 },
    { usUkBand: 46, euBand: 105, frBand: 120, pakIndBand: 46, ausBand: 24 },
  ];

  // Cup size conversion data
  const cupSizeData = [
    {
      bustBandDiff: "<1",
      ukCup: "AA",
      usCup: "AA",
      euCup: "AA",
      frCup: "AA",
      pakIndCup: "AA",
      ausCup: "AA",
    },
    {
      bustBandDiff: "1",
      ukCup: "A",
      usCup: "A",
      euCup: "A",
      frCup: "A",
      pakIndCup: "A",
      ausCup: "A",
    },
    {
      bustBandDiff: "2",
      ukCup: "B",
      usCup: "B",
      euCup: "B",
      frCup: "B",
      pakIndCup: "B",
      ausCup: "B",
    },
    {
      bustBandDiff: "3",
      ukCup: "C",
      usCup: "C",
      euCup: "C",
      frCup: "C",
      pakIndCup: "C",
      ausCup: "C",
    },
    {
      bustBandDiff: "4",
      ukCup: "D",
      usCup: "D",
      euCup: "D",
      frCup: "D",
      pakIndCup: "D",
      ausCup: "D",
    },
    {
      bustBandDiff: "5",
      ukCup: "DD",
      usCup: "DD/E",
      euCup: "E",
      frCup: "E",
      pakIndCup: "DD",
      ausCup: "DD",
    },
    {
      bustBandDiff: "6",
      ukCup: "E",
      usCup: "DDD/F",
      euCup: "F",
      frCup: "F",
      pakIndCup: "E",
      ausCup: "E",
    },
    {
      bustBandDiff: "7",
      ukCup: "F",
      usCup: "G",
      euCup: "G",
      frCup: "G",
      pakIndCup: "F",
      ausCup: "F",
    },
    {
      bustBandDiff: "8",
      ukCup: "FF",
      usCup: "H",
      euCup: "H",
      frCup: "H",
      pakIndCup: "FF",
      ausCup: "FF",
    },
    {
      bustBandDiff: "9",
      ukCup: "G",
      usCup: "I",
      euCup: "I",
      frCup: "I",
      pakIndCup: "G",
      ausCup: "G",
    },
    {
      bustBandDiff: "10",
      ukCup: "GG",
      usCup: "J",
      euCup: "J",
      frCup: "J",
      pakIndCup: "GG",
      ausCup: "GG",
    },
    {
      bustBandDiff: "11",
      ukCup: "H",
      usCup: "K",
      euCup: "K",
      frCup: "K",
      pakIndCup: "H",
      ausCup: "H",
    },
    {
      bustBandDiff: "12",
      ukCup: "HH",
      usCup: "L",
      euCup: "L",
      frCup: "L",
      pakIndCup: "HH",
      ausCup: "HH",
    },
    {
      bustBandDiff: "13",
      ukCup: "J",
      usCup: "M",
      euCup: "M",
      frCup: "M",
      pakIndCup: "J",
      ausCup: "J",
    },
    {
      bustBandDiff: "14",
      ukCup: "JJ",
      usCup: "N",
      euCup: "N",
      frCup: "N",
      pakIndCup: "JJ",
      ausCup: "JJ",
    },
    {
      bustBandDiff: "15",
      ukCup: "K",
      usCup: "O",
      euCup: "O",
      frCup: "O",
      pakIndCup: "K",
      ausCup: "K",
    },
    {
      bustBandDiff: "16",
      ukCup: "KK",
      usCup: "P",
      euCup: "P",
      frCup: "P",
      pakIndCup: "KK",
      ausCup: "KK",
    },
  ];

  // Convert inches to centimeters
  const inchesToCm = (inches: number) => {
    return Math.round(inches * 2.54);
  };

  return (
    <div className="pt-8 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-left sm:text-center mb-6 text-gray-800 font-rubik">
        <span className="inline-block">DETAILED BRA SIZE</span>{" "}
        <span className="text-yellow-500 ">CHART</span>
      </h2>

      {/* Unit toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-yellow-100 rounded-full p-1 inline-flex shadow-md">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              unit === "inches"
                ? "bg-yellow-500 text-white shadow-sm hover:-translate-y-0.5"
                : "text-gray-600 hover:bg-yellow-200 hover:-translate-y-0.5"
            }`}
            onClick={() => setUnit("inches")}
          >
            Inches
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              unit === "cm"
                ? "bg-yellow-500 text-white shadow-sm hover:-translate-y-0.5"
                : "text-gray-600 hover:bg-yellow-200 hover:-translate-y-0.5"
            }`}
            onClick={() => setUnit("cm")}
          >
            Centimeters
          </button>
        </div>
      </div>

      {/* Band Size Conversion Table */}
      <div className="mb-12 overflow-x-auto">
        <h3 className="text-xl font-bold mb-4 text-left sm:text-center text-[#000] py-2 rounded-lg">
         Bra Band size chart in {unit === "inches" ? "Inches" : "Centimeters"} 
        </h3>
        <table className="w-full border-collapse shadow-lg">
          <thead>
            <tr className="bg-yellow-500 text-white">
              <th className="border border-yellow-300 px-4 py-3">US/UK Band</th>
              <th className="border border-yellow-300 px-4 py-3">EU Band</th>
              <th className="border border-yellow-300 px-4 py-3">FR Band</th>
              <th className="border border-yellow-300 px-4 py-3">
                Pak/Ind Band
              </th>
              <th className="border border-yellow-300 px-4 py-3">
                AUS Band (Dress Size)
              </th>
            </tr>
          </thead>
          <tbody>
            {bandSizeData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-yellow-50" : "bg-white"}
              >
                <td className="border border-yellow-300 px-4 py-2 text-center">
                  {unit === "inches" ? row.usUkBand : inchesToCm(row.usUkBand)}
                </td>
                <td className="border border-yellow-300 px-4 py-2 text-center">
                  {unit === "inches"
                    ? row.euBand
                    : inchesToCm((row.euBand / 2.54) * 2.54)}
                </td>
                <td className="border border-yellow-300 px-4 py-2 text-center">
                  {unit === "inches"
                    ? row.frBand
                    : inchesToCm((row.frBand / 2.54) * 2.54)}
                </td>
                <td className="border border-yellow-300 px-4 py-2 text-center">
                  {unit === "inches"
                    ? row.pakIndBand
                    : inchesToCm(row.pakIndBand)}
                </td>
                <td className="border border-yellow-300 px-4 py-2 text-center">
                  {row.ausBand}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cup Size Conversion Table */}
      <div className="mb-12 overflow-x-auto">
        <h3 className="text-xl font-bold mb-4 text-left sm:text-center text-black py-2 rounded-lg">
          Cup Size Conversion Table
        </h3>
        <table className="w-full border-collapse shadow-lg">
          <thead>
            <tr className="bg-yellow-500 text-white">
              <th className="border border-yellow-300 px-4 py-3">
                Bust-Band Diff {unit === "inches" ? "(inches)" : "(cm)"}
              </th>
              <th className="border border-yellow-300 px-4 py-3">UK Cup</th>
              <th className="border border-yellow-300 px-4 py-3">US Cup</th>
              <th className="border border-yellow-300 px-4 py-3">EU Cup</th>
              <th className="border border-yellow-300 px-4 py-3">FR Cup</th>
              <th className="border border-yellow-300 px-4 py-3">
                Pak/Ind Cup
              </th>
              <th className="border border-yellow-300 px-4 py-3">
                AUS Cup (Dress)
              </th>
            </tr>
          </thead>
          <tbody>
            {cupSizeData.map((row, index) => {
              // Convert the difference if it's a number
              let diffValue = row.bustBandDiff;
              if (unit === "cm" && diffValue !== "<1") {
                diffValue = String(Math.round(parseFloat(diffValue) * 2.54));
              } else if (unit === "cm" && diffValue === "<1") {
                diffValue = "<2.5";
              }

              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-yellow-50" : "bg-white"}
                >
                  <td className="border border-yellow-300 px-4 py-2 text-center">
                    {diffValue}
                  </td>
                  <td className="border border-yellow-300 px-4 py-2 text-center">
                    {row.ukCup}
                  </td>
                  <td className="border border-yellow-300 px-4 py-2 text-center">
                    {row.usCup}
                  </td>
                  <td className="border border-yellow-300 px-4 py-2 text-center">
                    {row.euCup}
                  </td>
                  <td className="border border-yellow-300 px-4 py-2 text-center">
                    {row.frCup}
                  </td>
                  <td className="border border-yellow-300 px-4 py-2 text-center">
                    {row.pakIndCup}
                  </td>
                  <td className="border border-yellow-300 px-4 py-2 text-center">
                    {row.ausCup}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Size Chart Note */}
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4 mx-auto max-w-3xl shadow-md">
        <div className="flex items-center justify-center gap-2 mb-1">
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
          <span className="font-medium text-yellow-800">Size Chart Note</span>
        </div>
        <p className="text-sm text-gray-600 text-center">
          This chart provides standard sizing conversions. Actual sizes may vary
          by brand and style.
        </p>
      </div>
    </div>
  );
}
