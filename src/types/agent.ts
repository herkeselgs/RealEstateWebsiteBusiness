export type ListingStatus = "active" | "pending" | "coming-soon" | "open-house";

export interface Listing {
  slug: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  status: ListingStatus;
  openHouseNote?: string;
  photoTheme: "modern" | "craftsman" | "condo" | "colonial" | "ranch";
}

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
}

export interface Agent {
  slug: string;
  name: string;
  title: string;
  brokerage: string;
  license: string;
  location: string;
  phone: string;
  email: string;
  yearsExperience: number;
  designations: string[];
  bio: string;
  headshotInitials: string;
  heroTagline: string;
  specialties: string[];
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  listings: Listing[];
  testimonials: Testimonial[];
}
