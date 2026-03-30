export type PropertyDetails = {
  bedrooms: string;
  bathrooms: string;
  constructionarea: string;
};

export type Property = {
  id: string; // added ID just in case it's needed for trackers/loops
  img: string;
  status: string;
  price: string;
  location: string;
  likes: number; // added to filter top liked properties
  details: PropertyDetails[];
};

export interface PropertyShowcase extends Property {
  title: string;
  description: string;
  photosCount: number;
  parkingSpaces: number;
  hasVirtualTour: boolean;
  attributes: { id: string; label: string }[];
}