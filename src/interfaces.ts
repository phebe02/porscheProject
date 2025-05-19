export interface Factory {
  id: string;
  name: string;
  location: string;
  founded: number;
  logoUrl: string;
  isElectricCertified: boolean;
}

export interface Porsche {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  releaseDate: string;
  imageUrl: string;
  category: "Coupé" | "SUV" | "Elektrisch" | "Cabrio" | "Hybrid";
  features: string[];
  factory: Factory;
}