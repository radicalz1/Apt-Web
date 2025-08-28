export interface TierFeature {
  text: string;
  tooltip?: string;
}

export interface Tier {
  name: string;
  subtitle: string;
  price: string;
  priceMonthly: string;
  duration: string;
  idealFor: string[];
  features: TierFeature[];
  exclusionsTitle: string;
  exclusions: string[];
  isRecommended: boolean;
  ctaText: string;
}
