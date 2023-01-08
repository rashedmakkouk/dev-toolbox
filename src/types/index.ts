export interface FeatureProps {
  description: string;
  imageUrl: string;
  name: string;
  /** Fallback to `/name`. */
  title?: string;
  /** Fallback to `/name`. */
  url?: string;
}
