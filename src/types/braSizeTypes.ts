// Define types for chart data
export type ChartRow = {
  band: string;
  underbust: string;
  cupA: string;
  cupB: string;
  cupC: string;
  cupD: string;
  cupE: string;
  cupF: string;
};

export type RegionChartData = {
  headers: string[];
  rows: ChartRow[];
};

export type BraSizeChartData = {
  [region: string]: RegionChartData;
};

export type CupMapping = {
  [key: string]: string;
};

export type RegionConversion = {
  bandAdjustment: number;
  cupMapping: CupMapping;
};

export type RegionConversions = {
  [region: string]: RegionConversion;
};

export type BandSizes = {
  [unit: string]: {
    [size: number]: { cm: string };
  };
};

export type CupSizes = {
  [unit: string]: {
    [difference: number]: string;
  };
};

export type BraSizeData = {
  bandSizes: BandSizes;
  cupSizes: CupSizes;
  regionConversions: RegionConversions;
};

export type RecommendedSize = {
  bandSize: number;
  cupSize: string;
  isInvalid?: boolean;
} | null;
