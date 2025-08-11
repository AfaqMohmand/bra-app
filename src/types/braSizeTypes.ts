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
  inches: {
    [size: string]: {
      usUk: string;
      eu: string;
      fr: string;
      pakInd: string;
      aus: string;
    };
  };
};

export type CupSizes = {
  [unit: string]: {
    [difference: string]: string;
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
  bustBandDifference?: number;
  isInvalid?: boolean;
  errorMessage?: string;
  unit?: string;
} | null;
