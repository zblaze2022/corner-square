export interface FrameData {
  frame: number;
  chapter: string;
  altitude: string;
  focalLength: string;
  pitch: string;
  focusPoint: string;
}

export interface AvailableSpace {
  id: string;
  code: string;
  name: string;
  floor: string;
  type: 'Retail' | 'Office' | 'Flagship' | 'Executive';
  areaSqm: number;
  areaSqft: number;
  ceilingHeight: string;
  frontage: string;
  status: 'Available' | 'Under Offer' | 'Reserved';
  features: string[];
  description: string;
  pricePerSqm?: string;
}

export interface BuildingFeature {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}
