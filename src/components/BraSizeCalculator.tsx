"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import zigzagTwo from "../assets/zigzag_two.png";
import bgZigzag from "../assets/bg_zigzag.png";
import underbustSvg from "../assets/underbust-cup.svg";
import overbustSvg from "../assets/overbust-cup.svg";
import UnitToggle from "./unit-toggle";
import { Dropdown } from "./Dropdown";
import Image from "next/image";
// Ensure UnitToggle component is defined and used correctly

// Define types for chart data
type ChartRow = {
  band: string;
  underbust: string;
  cupA: string;
  cupB: string;
  cupC: string;
  cupD: string;
  cupE: string;
  cupF: string;
};

type RegionChartData = {
  headers: string[];
  rows: ChartRow[];
};

type BraSizeChartData = {
  [region: string]: RegionChartData;
};

type CupMapping = {
  [key: string]: string;
};

type RegionConversion = {
  bandAdjustment: number;
  cupMapping: CupMapping;
};

type RegionConversions = {
  [region: string]: RegionConversion;
};

type BandSizes = {
  [unit: string]: {
    [size: number]: { cm: string };
  };
};

type CupSizes = {
  [unit: string]: {
    [difference: number]: string;
  };
};

type BraSizeData = {
  bandSizes: BandSizes;
  cupSizes: CupSizes;
  regionConversions: RegionConversions;
};

type RecommendedSize = {
  bandSize: number;
  cupSize: string;
} | null;

const BraSizeCalculator = () => {
  const [unit, setUnit] = useState("inches");
  const [bandMeasurement, setBandMeasurement] = useState("");
  const [bustMeasurement, setBustMeasurement] = useState("");
  const [recommendedSize, setRecommendedSize] = useState<{
    bandSize: number;
    cupSize: string;
  } | null>(null);
  const [activeRegion, setActiveRegion] =
    useState<keyof typeof braSizeData.regionConversions>("US");
  const [chartUnit, setChartUnit] = useState("in");
  const [chartRegion, setChartRegion] = useState("US");
  const [showBandTooltip, setShowBandTooltip] = useState(false);
  const [showBustTooltip, setShowBustTooltip] = useState(false);

  // Bra size chart data for the dynamic table
  const braSizeChartData: BraSizeChartData = useMemo(
    () => ({
      // Data for the size chart table
      "Pak/Ind": {
        headers: [
          "BAND SIZE",
          "UNDERBUST (cm/in)",
          "CUP A",
          "CUP B",
          "CUP C",
          "CUP D",
          "CUP E",
          "CUP F",
        ],
        rows: [
          {
            band: "28",
            underbust: "58.5-63.5",
            cupA: "71-73.5",
            cupB: "73.5-76",
            cupC: "76-78.5",
            cupD: "78.5-81",
            cupE: "",
            cupF: "",
          },
          {
            band: "30",
            underbust: "63.5-68.5",
            cupA: "76-78.5",
            cupB: "78.5-81",
            cupC: "81-83.5",
            cupD: "83.5-86",
            cupE: "",
            cupF: "",
          },
          {
            band: "32",
            underbust: "68.5-73.5",
            cupA: "81-83.5",
            cupB: "83.5-86",
            cupC: "86-89",
            cupD: "89-91.5",
            cupE: "91.5-94",
            cupF: "94-96.5",
          },
          {
            band: "34",
            underbust: "73.5-78.5",
            cupA: "86-89",
            cupB: "89-91.5",
            cupC: "91.5-94",
            cupD: "94-96.5",
            cupE: "96.5-99",
            cupF: "99-1.01m",
          },
          {
            band: "36",
            underbust: "78.5-84",
            cupA: "91.5-94",
            cupB: "94-96.5",
            cupC: "96.5-99",
            cupD: "99cm-1.01m",
            cupE: "1.01-1.04m",
            cupF: "1.04-1.06m",
          },
          {
            band: "38",
            underbust: "84-89",
            cupA: "96.5-99",
            cupB: "99-1.01m",
            cupC: "1.01-1.04m",
            cupD: "1.04-1.06m",
            cupE: "1.06-1.09",
            cupF: "1.09-1.11m",
          },
          {
            band: "40",
            underbust: "89-94",
            cupA: "1.01-1.04m",
            cupB: "1.04-1.06m",
            cupC: "1.06-1.09m",
            cupD: "1.09-1.11m",
            cupE: "1.11-1.14m",
            cupF: "1.14-1.16m",
          },
          {
            band: "42",
            underbust: "94-99",
            cupA: "1.06-1.09m",
            cupB: "1.09-1.11m",
            cupC: "1.11-1.14m",
            cupD: "1.14-1.16m",
            cupE: "1.16-1.19m",
            cupF: "1.19-1.22m",
          },
          {
            band: "44",
            underbust: "99-104",
            cupA: "1.11-1.14m",
            cupB: "1.14-1.16m",
            cupC: "1.16-1.19m",
            cupD: "1.19-1.22m",
            cupE: "1.22-1.24m",
            cupF: "1.24-1.27m",
          },
        ],
      },
      US: {
        headers: [
          "BAND SIZE",
          "UNDERBUST (cm/in)",
          "CUP A",
          "CUP B",
          "CUP C",
          "CUP D",
          "CUP E",
          "CUP F",
        ],
        rows: [
          {
            band: "28",
            underbust: "58.5-63.5",
            cupA: "71-73.5",
            cupB: "73.5-76",
            cupC: "76-78.5",
            cupD: "78.5-81",
            cupE: "83.5-86",
            cupF: "91.5-94",
          },
          {
            band: "30",
            underbust: "63.5-68.5",
            cupA: "76-78.5",
            cupB: "78.5-81",
            cupC: "81-83.5",
            cupD: "83.5-86",
            cupE: "86-89",
            cupF: "94-96.5",
          },
          {
            band: "32",
            underbust: "68.5-73.5",
            cupA: "81-83.5",
            cupB: "83.5-86",
            cupC: "86-89",
            cupD: "89-91.5",
            cupE: "91.5-94",
            cupF: "96.5-99",
          },
          {
            band: "34",
            underbust: "73.5-78.5",
            cupA: "86-89",
            cupB: "89-91.5",
            cupC: "91.5-94",
            cupD: "94-96.5",
            cupE: "96.5-99",
            cupF: "99-101.5",
          },
          {
            band: "36",
            underbust: "78.5-84",
            cupA: "91.5-94",
            cupB: "94-96.5",
            cupC: "96.5-99",
            cupD: "99-101.5",
            cupE: "101.5-104",
            cupF: "104-106.5",
          },
          {
            band: "38",
            underbust: "84-89",
            cupA: "96.5-99",
            cupB: "99-101.5",
            cupC: "101.5-104",
            cupD: "104-106.5",
            cupE: "106.5-109",
            cupF: "109-111.5",
          },
          {
            band: "40",
            underbust: "89-94",
            cupA: "101.5-104",
            cupB: "104-106.5",
            cupC: "106.5-109",
            cupD: "109-111.5",
            cupE: "111.5-114",
            cupF: "114-116.5",
          },
          {
            band: "42",
            underbust: "94-99",
            cupA: "106.5-109",
            cupB: "109-111.5",
            cupC: "111.5-114",
            cupD: "114-116.5",
            cupE: "116.5-119",
            cupF: "119-121.5",
          },
          {
            band: "44",
            underbust: "99-104",
            cupA: "111.5-114",
            cupB: "114-116.5",
            cupC: "116.5-119",
            cupD: "119-121.5",
            cupE: "121.5-124",
            cupF: "124-127",
          },
        ],
      },
      UK: {
        headers: [
          "BAND SIZE",
          "UNDERBUST (cm/in)",
          "CUP A",
          "CUP B",
          "CUP C",
          "CUP D",
          "CUP E",
          "CUP F",
        ],
        rows: [
          {
            band: "28",
            underbust: "58.5-63.5",
            cupA: "71-73.5",
            cupB: "73.5-76",
            cupC: "76-78.5",
            cupD: "78.5-81",
            cupE: "83.5-86",
            cupF: "91.5-94",
          },
          {
            band: "30",
            underbust: "63.5-68.5",
            cupA: "76-78.5",
            cupB: "78.5-81",
            cupC: "81-83.5",
            cupD: "83.5-86",
            cupE: "86-89",
            cupF: "94-96.5",
          },
          {
            band: "32",
            underbust: "68.5-73.5",
            cupA: "81-83.5",
            cupB: "83.5-86",
            cupC: "86-89",
            cupD: "89-91.5",
            cupE: "91.5-94",
            cupF: "96.5-99",
          },
          {
            band: "34",
            underbust: "73.5-78.5",
            cupA: "86-89",
            cupB: "89-91.5",
            cupC: "91.5-94",
            cupD: "94-96.5",
            cupE: "96.5-99",
            cupF: "99-101.5",
          },
          {
            band: "36",
            underbust: "78.5-84",
            cupA: "91.5-94",
            cupB: "94-96.5",
            cupC: "96.5-99",
            cupD: "99-101.5",
            cupE: "101.5-104",
            cupF: "104-106.5",
          },
          {
            band: "38",
            underbust: "84-89",
            cupA: "96.5-99",
            cupB: "99-101.5",
            cupC: "101.5-104",
            cupD: "104-106.5",
            cupE: "106.5-109",
            cupF: "109-111.5",
          },
          {
            band: "40",
            underbust: "89-94",
            cupA: "101.5-104",
            cupB: "104-106.5",
            cupC: "106.5-109",
            cupD: "109-111.5",
            cupE: "111.5-114",
            cupF: "114-116.5",
          },
          {
            band: "42",
            underbust: "94-99",
            cupA: "106.5-109",
            cupB: "109-111.5",
            cupC: "111.5-114",
            cupD: "114-116.5",
            cupE: "116.5-119",
            cupF: "119-121.5",
          },
          {
            band: "44",
            underbust: "99-104",
            cupA: "111.5-114",
            cupB: "114-116.5",
            cupC: "116.5-119",
            cupD: "119-121.5",
            cupE: "121.5-124",
            cupF: "124-127",
          },
        ],
      },
      EU: {
        headers: [
          "BAND SIZE",
          "UNDERBUST (cm/in)",
          "CUP A",
          "CUP B",
          "CUP C",
          "CUP D",
          "CUP E",
          "CUP F",
        ],
        rows: [
          {
            band: "60",
            underbust: "58.5-63.5",
            cupA: "71-73.5",
            cupB: "73.5-76",
            cupC: "76-78.5",
            cupD: "78.5-81",
            cupE: "83.5-86",
            cupF: "91.5-94",
          },
          {
            band: "65",
            underbust: "63.5-68.5",
            cupA: "76-78.5",
            cupB: "78.5-81",
            cupC: "81-83.5",
            cupD: "83.5-86",
            cupE: "86-89",
            cupF: "94-96.5",
          },
          {
            band: "70",
            underbust: "68.5-73.5",
            cupA: "81-83.5",
            cupB: "83.5-86",
            cupC: "86-89",
            cupD: "89-91.5",
            cupE: "91.5-94",
            cupF: "96.5-99",
          },
          {
            band: "75",
            underbust: "73.5-78.5",
            cupA: "86-89",
            cupB: "89-91.5",
            cupC: "91.5-94",
            cupD: "94-96.5",
            cupE: "96.5-99",
            cupF: "99-101.5",
          },
          {
            band: "80",
            underbust: "78.5-84",
            cupA: "91.5-94",
            cupB: "94-96.5",
            cupC: "96.5-99",
            cupD: "99-101.5",
            cupE: "101.5-104",
            cupF: "104-106.5",
          },
          {
            band: "85",
            underbust: "84-89",
            cupA: "96.5-99",
            cupB: "99-101.5",
            cupC: "101.5-104",
            cupD: "104-106.5",
            cupE: "106.5-109",
            cupF: "109-111.5",
          },
          {
            band: "90",
            underbust: "89-94",
            cupA: "101.5-104",
            cupB: "104-106.5",
            cupC: "106.5-109",
            cupD: "109-111.5",
            cupE: "111.5-114",
            cupF: "114-116.5",
          },
          {
            band: "95",
            underbust: "94-99",
            cupA: "106.5-109",
            cupB: "109-111.5",
            cupC: "111.5-114",
            cupD: "114-116.5",
            cupE: "116.5-119",
            cupF: "119-121.5",
          },
          {
            band: "100",
            underbust: "99-104",
            cupA: "111.5-114",
            cupB: "114-116.5",
            cupC: "116.5-119",
            cupD: "119-121.5",
            cupE: "121.5-124",
            cupF: "124-127",
          },
        ],
      },
      FR: {
        headers: [
          "BAND SIZE",
          "UNDERBUST (cm/in)",
          "CUP A",
          "CUP B",
          "CUP C",
          "CUP D",
          "CUP E",
          "CUP F",
        ],
        rows: [
          {
            band: "75",
            underbust: "58.5-63.5",
            cupA: "71-73.5",
            cupB: "73.5-76",
            cupC: "76-78.5",
            cupD: "78.5-81",
            cupE: "83.5-86",
            cupF: "91.5-94",
          },
          {
            band: "80",
            underbust: "63.5-68.5",
            cupA: "76-78.5",
            cupB: "78.5-81",
            cupC: "81-83.5",
            cupD: "83.5-86",
            cupE: "86-89",
            cupF: "94-96.5",
          },
          {
            band: "85",
            underbust: "68.5-73.5",
            cupA: "81-83.5",
            cupB: "83.5-86",
            cupC: "86-89",
            cupD: "89-91.5",
            cupE: "91.5-94",
            cupF: "96.5-99",
          },
          {
            band: "90",
            underbust: "73.5-78.5",
            cupA: "86-89",
            cupB: "89-91.5",
            cupC: "91.5-94",
            cupD: "94-96.5",
            cupE: "96.5-99",
            cupF: "99-101.5",
          },
          {
            band: "95",
            underbust: "78.5-84",
            cupA: "91.5-94",
            cupB: "94-96.5",
            cupC: "96.5-99",
            cupD: "99-101.5",
            cupE: "101.5-104",
            cupF: "104-106.5",
          },
          {
            band: "100",
            underbust: "84-89",
            cupA: "96.5-99",
            cupB: "99-101.5",
            cupC: "101.5-104",
            cupD: "104-106.5",
            cupE: "106.5-109",
            cupF: "109-111.5",
          },
          {
            band: "105",
            underbust: "89-94",
            cupA: "101.5-104",
            cupB: "104-106.5",
            cupC: "106.5-109",
            cupD: "109-111.5",
            cupE: "111.5-114",
            cupF: "114-116.5",
          },
          {
            band: "110",
            underbust: "94-99",
            cupA: "106.5-109",
            cupB: "109-111.5",
            cupC: "111.5-114",
            cupD: "114-116.5",
            cupE: "116.5-119",
            cupF: "119-121.5",
          },
          {
            band: "115",
            underbust: "99-104",
            cupA: "111.5-114",
            cupB: "114-116.5",
            cupC: "116.5-119",
            cupD: "119-121.5",
            cupE: "121.5-124",
            cupF: "124-127",
          },
        ],
      },
      JP: {
        headers: [
          "BAND SIZE",
          "UNDERBUST (cm/in)",
          "CUP A",
          "CUP B",
          "CUP C",
          "CUP D",
          "CUP E",
          "CUP F",
        ],
        rows: [
          {
            band: "65",
            underbust: "58.5-63.5",
            cupA: "71-73.5",
            cupB: "73.5-76",
            cupC: "76-78.5",
            cupD: "78.5-81",
            cupE: "83.5-86",
            cupF: "91.5-94",
          },
          {
            band: "70",
            underbust: "63.5-68.5",
            cupA: "76-78.5",
            cupB: "78.5-81",
            cupC: "81-83.5",
            cupD: "83.5-86",
            cupE: "86-89",
            cupF: "94-96.5",
          },
          {
            band: "75",
            underbust: "68.5-73.5",
            cupA: "81-83.5",
            cupB: "83.5-86",
            cupC: "86-89",
            cupD: "89-91.5",
            cupE: "91.5-94",
            cupF: "96.5-99",
          },
          {
            band: "80",
            underbust: "73.5-78.5",
            cupA: "86-89",
            cupB: "89-91.5",
            cupC: "91.5-94",
            cupD: "94-96.5",
            cupE: "96.5-99",
            cupF: "99-101.5",
          },
          {
            band: "85",
            underbust: "78.5-84",
            cupA: "91.5-94",
            cupB: "94-96.5",
            cupC: "96.5-99",
            cupD: "99-101.5",
            cupE: "101.5-104",
            cupF: "104-106.5",
          },
          {
            band: "90",
            underbust: "84-89",
            cupA: "96.5-99",
            cupB: "99-101.5",
            cupC: "101.5-104",
            cupD: "104-106.5",
            cupE: "106.5-109",
            cupF: "109-111.5",
          },
          {
            band: "95",
            underbust: "89-94",
            cupA: "101.5-104",
            cupB: "104-106.5",
            cupC: "106.5-109",
            cupD: "109-111.5",
            cupE: "111.5-114",
            cupF: "114-116.5",
          },
          {
            band: "100",
            underbust: "94-99",
            cupA: "106.5-109",
            cupB: "109-111.5",
            cupC: "111.5-114",
            cupD: "114-116.5",
            cupE: "116.5-119",
            cupF: "119-121.5",
          },
          {
            band: "105",
            underbust: "99-104",
            cupA: "111.5-114",
            cupB: "114-116.5",
            cupC: "116.5-119",
            cupD: "119-121.5",
            cupE: "121.5-124",
            cupF: "124-127",
          },
        ],
      },
    }),
    []
  );

  // Bra size conversion data
  const braSizeData: BraSizeData = useMemo(
    () => ({
      // Band size ranges in inches
      bandSizes: {
        inches: {
          26: { cm: "65-66" },
          28: { cm: "67-71" },
          30: { cm: "72-76" },
          32: { cm: "77-81" },
          34: { cm: "82-86" },
          36: { cm: "87-91" },
          38: { cm: "92-96" },
          40: { cm: "97-101" },
          42: { cm: "102-106" },
          44: { cm: "107-111" },
          46: { cm: "112-116" },
          48: { cm: "117-121" },
        },
      },

      // Cup size differences (bust - band) in inches
      cupSizes: {
        inches: {
          0: "AA",
          1: "A",
          2: "B",
          3: "C",
          4: "D",
          5: "DD/E",
          6: "DDD/F",
          7: "G",
          8: "H",
          9: "I",
          10: "J",
          11: "K",
          12: "L",
          13: "M",
          14: "N",
          15: "O",
        },
      },

      // Regional size conversions
      regionConversions: {
        "Pak/Ind": {
          bandAdjustment: 0,
          cupMapping: {
            AA: "AA",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            "DD/E": "DD/E",
            "DDD/F": "DDD/F",
            G: "G",
            H: "H",
            I: "I",
            J: "J",
            K: "K",
            L: "L",
            M: "M",
            N: "N",
            O: "O",
          },
        },
        US: {
          bandAdjustment: 0,
          cupMapping: {
            AA: "AA",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            "DD/E": "DD/E",
            "DDD/F": "DDD/F",
            G: "G",
            H: "H",
            I: "I",
            J: "J",
            K: "K",
            L: "L",
            M: "M",
            N: "N",
            O: "O",
          },
        },
        UK: {
          bandAdjustment: 0,
          cupMapping: {
            AA: "AA",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            "DD/E": "DD/E",
            "DDD/F": "F",
            G: "FF",
            H: "G",
            I: "GG",
            J: "H",
            K: "HH",
            L: "J",
            M: "JJ",
            N: "K",
            O: "KK",
          },
        },
        EU: {
          bandAdjustment: 0,
          cupMapping: {
            AA: "AA",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            "DD/E": "E",
            "DDD/F": "F",
            G: "G",
            H: "H",
            I: "I",
            J: "J",
            K: "K",
            L: "L",
            M: "M",
            N: "N",
            O: "O",
          },
        },
        FR: {
          bandAdjustment: 15,
          cupMapping: {
            AA: "AA",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            "DD/E": "E",
            "DDD/F": "F",
            G: "G",
            H: "H",
            I: "I",
            J: "J",
            K: "K",
            L: "L",
            M: "M",
            N: "N",
            O: "O",
          },
        },
        IT: {
          bandAdjustment: 15,
          cupMapping: {
            AA: "AA",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            "DD/E": "E",
            "DDD/F": "F",
            G: "G",
            H: "H",
            I: "I",
            J: "J",
            K: "K",
            L: "L",
            M: "M",
            N: "N",
            O: "O",
          },
        },
        AU: {
          bandAdjustment: 0,
          cupMapping: {
            AA: "AA",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            "DD/E": "DD/E",
            "DDD/F": "F",
            G: "FF",
            H: "G",
            I: "GG",
            J: "H",
            K: "HH",
            L: "J",
            M: "JJ",
            N: "K",
            O: "KK",
          },
        },
        JP: {
          bandAdjustment: 0,
          cupMapping: {
            AA: "AA",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            "DD/E": "E",
            "DDD/F": "F",
            G: "G",
            H: "H",
            I: "I",
            J: "J",
            K: "K",
            L: "L",
            M: "M",
            N: "N",
            O: "O",
          },
        },
      },
    }),
    []
  );

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

    if (!cupSize) return null;

    return { bandSize, cupSize };
  }, [bandMeasurement, bustMeasurement, unit, braSizeData]);

  // Convert measurements between units for the chart
  const convertMeasurement = (value: string, targetUnit: string): string => {
    if (!value) return value;

    // Check if the value is a range (e.g., "58.5-63.5")
    if (value.includes("-")) {
      const [min, max] = value.split("-");

      if (targetUnit === "in" && chartUnit === "cm") {
        // Convert from cm to inches
        const minInches = (parseFloat(min) / 2.54).toFixed(1);
        const maxInches = (parseFloat(max) / 2.54).toFixed(1);
        return `${minInches}-${maxInches}`;
      } else if (targetUnit === "cm" && chartUnit === "in") {
        // Convert from inches to cm
        const minCm = (parseFloat(min) * 2.54).toFixed(1);
        const maxCm = (parseFloat(max) * 2.54).toFixed(1);
        return `${minCm}-${maxCm}`;
      }
    }

    return value;
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

  // Update recommended size when measurements change
  useEffect(() => {
    const baseSize = calculateBraSize();
    if (baseSize) {
      setRecommendedSize(baseSize);
    }
  }, [bandMeasurement, bustMeasurement, unit, calculateBraSize]);

  // Handle unit change
  const handleUnitChange = (newUnit: string) => {
    setUnit(newUnit);
    setBandMeasurement("");
    setBustMeasurement("");
  };

  return (
    <div className="bra-size-calculator relative overflow-hidden rounded-xl shadow-xl">
      {/* Zigzag texture background with yellow color */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${zigzagTwo})`,
          backgroundRepeat: "repeat",
          backgroundSize: "150px",
          backgroundColor: "#FFDD00" /* Brighter yellow color */,
          mixBlendMode: "soft-light",
          opacity: 1,
        }}
      ></div>

      {/* Additional zigzag layer for more texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${zigzagTwo})`,
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
          transform: "rotate(45deg)",
          backgroundColor: "transparent",
          mixBlendMode: "overlay",
          opacity: 0.4,
        }}
      ></div>

      {/* Curved shapes for decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full opacity-30 blur-xl transform translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-xl transform -translate-x-40 translate-y-20"></div>

      {/* Content container with glass effect */}
      <div
        className="relative z-10 p-6 md:p-8"
        style={{
          position: "relative",
          backgroundImage: `url(${bgZigzag})`,
          backgroundRepeat: "repeat",
          backgroundSize: "120px",
          backgroundColor:
            "rgba(255, 221, 0, 0.15)" /* Yellow with low opacity */,
          backdropFilter: "blur(5px)",
        }}
      >
        {/* Curved top edge */}
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 w-full transform rotate-180"
          >
            <path
              fill="#ffffff"
              fillOpacity="0.9"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "1px",
          }}
        >
          PROFESSIONAL BRA SIZE CALCULATOR
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Get your perfect fit with our accurate bra size calculator. Used by
          thousands of women worldwide.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Left side - Measurement inputs */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200 relative overflow-hidden">
            {/* Decorative corner accent */}
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
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Enter Your Measurements
            </h3>
            <p className="text-center text-sm text-gray-500 mb-4">
              Measure around your body for the most accurate results
            </p>

            {/* Unit toggle */}
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 rounded-full p-1 inline-flex shadow-md">
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    unit === "inches"
                      ? "bg-yellow-500 text-white shadow-sm"
                      : "text-gray-600 hover:bg-yellow-200"
                  }`}
                  onClick={() => handleUnitChange("inches")}
                >
                  Inches
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    unit === "centimeters"
                      ? "bg-yellow-500 text-white shadow-sm"
                      : "text-gray-600 hover:bg-yellow-200"
                  }`}
                  onClick={() => handleUnitChange("centimeters")}
                >
                  Centimeters
                </button>
              </div>
            </div>

            {/* Measurement inputs */}
            <div className="space-y-6">
              <div>
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
                  <input
                    type="number"
                    value={bandMeasurement}
                    onChange={(e) => setBandMeasurement(e.target.value)}
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={`Enter band size in ${unit}`}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-500">
                      {unit === "inches" ? "in" : "cm"}
                    </span>
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
                              Stand straight in front of a mirror wearing a
                              non-padded bra.
                            </li>
                            <li>
                              Wrap the measuring tape around your ribcage,
                              directly under your bust.
                            </li>
                            <li>
                              The tape should be snug but not tight - you should
                              be able to breathe comfortably.
                            </li>
                            <li>
                              Make sure the tape is parallel to the floor all
                              the way around.
                            </li>
                            <li>Round to the nearest whole number.</li>
                          </ol>
                          <p className="mt-4 text-sm text-gray-600">
                            This measurement is crucial for proper support as
                            the band provides 80% of a bra&apos;s support.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
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
                  <input
                    type="number"
                    value={bustMeasurement}
                    onChange={(e) => setBustMeasurement(e.target.value)}
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={`Enter bust size in ${unit}`}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-500">
                      {unit === "inches" ? "in" : "cm"}
                    </span>
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
                              Stand straight in front of a mirror wearing a
                              non-padded bra.
                            </li>
                            <li>
                              Wrap the measuring tape around the fullest part of
                              your bust.
                            </li>
                            <li>
                              Make sure the tape is parallel to the floor all
                              the way around.
                            </li>
                            <li>
                              The tape should be snug but not tight or
                              compressing your bust.
                            </li>
                            <li>
                              Take a deep breath and then exhale before taking
                              the measurement.
                            </li>
                            <li>Round to the nearest whole number.</li>
                          </ol>
                          <p className="mt-4 text-sm text-gray-600">
                            This measurement helps determine your cup size when
                            compared with your band measurement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* How to measure guide */}
            <div className="mt-8 bg-white p-4 rounded-lg border-2 border-yellow-200 shadow-sm">
              <h4 className="flex items-center text-sm font-medium text-gray-800 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-500 mr-2"
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
                How to Measure
              </h4>
              <div className="space-y-2 text-xs text-gray-600">
                <p>
                  <strong>Band:</strong> Measure snugly around your ribcage,
                  directly under your bust.
                </p>
                <p>
                  <strong>Bust:</strong> Measure around the fullest part of your
                  bust while wearing a non-padded bra.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Results */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-300 opacity-30 transform rotate-45 -translate-x-8 -translate-y-8"></div>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Your Recommended Size
            </h3>

            {recommendedSize ? (
              <div className="text-center">
                <div
                  className="text-5xl font-bold my-6 text-yellow-600"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  {getSizeForRegion(String(activeRegion), recommendedSize) ||
                    ""}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {activeRegion} Size
                </p>

                {/* Size chart tabs */}
                <div className="mt-8">
                  <h4 className="flex items-center justify-center text-sm font-medium text-gray-800 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    International Size Chart
                  </h4>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {Object.keys(braSizeData.regionConversions).map(
                      (region) => (
                        <button
                          key={region}
                          className={`py-2 px-3 text-sm rounded-lg transition-all ${
                            activeRegion === region
                              ? "bg-yellow-500 text-white shadow-sm font-medium"
                              : "text-gray-600 hover:bg-yellow-100 border border-yellow-200"
                          }`}
                          onClick={() =>
                            setActiveRegion(
                              region as keyof typeof braSizeData.regionConversions
                            )
                          }
                        >
                          {region}
                        </button>
                      )
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 shadow-sm">
                      <p className="text-xs text-gray-500 mb-1">Band Size</p>
                      <p className="text-xl font-semibold text-yellow-700">
                        {String(
                          recommendedSize.bandSize +
                            braSizeData.regionConversions[
                              activeRegion as keyof typeof braSizeData.regionConversions
                            ].bandAdjustment
                        )}
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 shadow-sm">
                      <p className="text-xs text-gray-500 mb-1">Cup Size</p>
                      <p className="text-xl font-semibold text-yellow-700">
                        {braSizeData.regionConversions[
                          activeRegion as keyof typeof braSizeData.regionConversions
                        ].cupMapping[
                          recommendedSize.cupSize as keyof (typeof braSizeData.regionConversions)[typeof activeRegion]["cupMapping"]
                        ] || recommendedSize.cupSize}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 px-4">
                {bandMeasurement && bustMeasurement ? (
                  <div className="text-gray-500">
                    <p className="mb-2">No matching size found.</p>
                    <p className="text-sm">
                      Please double-check your measurements or consult with a
                      professional fitter.
                    </p>
                  </div>
                ) : (
                  <div className="text-gray-500">
                    <p className="mb-2">Enter your measurements</p>
                    <p className="text-sm">
                      Your recommended bra size will appear here.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.9"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Bra Size Chart Section */}
      <div className="mt-16 relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "1px",
          }}
        >
          DETAILED BRA SIZE CHART
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Find your perfect fit with our comprehensive size chart for different
          regions
        </p>

        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200 relative overflow-hidden">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-300 opacity-30 transform rotate-45 translate-x-8 -translate-y-8"></div>

          {/* Region and Unit Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* Region Selector */}
            <Dropdown
              chartRegion={chartRegion}
              setChartRegion={setChartRegion}
            />

            {/* Unit Toggle */}
            <UnitToggle chartUnit={chartUnit} setChartUnit={setChartUnit} />
          </div>

          {/* Size Chart Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-yellow-200">
              <thead>
                <tr>
                  {braSizeChartData[chartRegion].headers.map(
                    (header, index) => (
                      <th
                        key={index}
                        className="px-3 py-3 bg-yellow-50 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                      >
                        {index === 1 ? `UNDERBUST (${chartUnit})` : header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-yellow-100">
                {braSizeChartData[chartRegion].rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-yellow-50" : "bg-white"}
                  >
                    <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.band}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-700">
                      {convertMeasurement(row.underbust, chartUnit)}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-700">
                      {convertMeasurement(row.cupA, chartUnit)}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-700">
                      {convertMeasurement(row.cupB, chartUnit)}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-700">
                      {convertMeasurement(row.cupC, chartUnit)}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-700">
                      {convertMeasurement(row.cupD, chartUnit)}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-700">
                      {convertMeasurement(row.cupE, chartUnit)}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-700">
                      {convertMeasurement(row.cupF, chartUnit)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Free Size Note */}
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Our free size products are made of knitted material and can fit
              well on bodies from size S to L.
            </p>
            <p className="mt-1">
              * Measurement in {chartUnit === "in" ? "inches" : "centimeters"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BraSizeCalculator;
