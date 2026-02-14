
export interface Review {
  id: number;
  stars: number;
  text: string;
  author: string;
  role: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description?: string;
}

export interface SuiteTier {
  name: string;
  price: string;
  size: string;
  isPopular?: boolean;
  features: string[];
}
