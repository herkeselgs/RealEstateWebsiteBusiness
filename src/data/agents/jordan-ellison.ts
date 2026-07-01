import type { Agent } from "@/types/agent";

export const jordanEllison: Agent = {
  slug: "jordan-ellison",
  name: "Jordan Ellison",
  title: "Realtor®",
  brokerage: "Harborview Realty Group",
  license: "DRE #02184730",
  location: "Portland, OR",
  phone: "(503) 555-0148",
  email: "jordan@harborviewrealty.example",
  yearsExperience: 9,
  designations: ["ABR", "SRS", "Certified Luxury Home Specialist"],
  bio: "Jordan has spent nearly a decade helping Portland-area buyers and sellers navigate the market with a calm, straight-talking approach. Whether it's a first home or a fifth, Jordan's clients get the same thing: fast answers, honest numbers, and someone who actually picks up the phone.",
  headshotInitials: "JE",
  heroTagline: "Helping Portland families find home since 2016.",
  specialties: ["First-time buyers", "Relocation", "Luxury & waterfront", "Investment properties"],
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  listings: [
    {
      slug: "1420-alder-crest-ln",
      address: "1420 Alder Crest Ln",
      city: "Portland",
      state: "OR",
      zip: "97210",
      price: 685000,
      beds: 4,
      baths: 3,
      sqft: 2450,
      description:
        "Bright, fully-updated craftsman two blocks from Forest Park. Chef's kitchen, original fir floors, and a finished lower level built for movie nights.",
      status: "active",
      photoTheme: "craftsman",
    },
    {
      slug: "88-riverside-ter-unit-6b",
      address: "88 Riverside Ter, Unit 6B",
      city: "Portland",
      state: "OR",
      zip: "97201",
      price: 429000,
      beds: 2,
      baths: 2,
      sqft: 1180,
      description:
        "Floor-to-ceiling river views from every room. Walk to the Tram, OHSU, and the South Waterfront greenway. Includes deeded parking.",
      status: "open-house",
      openHouseNote: "Open House Sat & Sun, 1–3 PM",
      photoTheme: "condo",
    },
    {
      slug: "5117-nw-thornridge-ave",
      address: "5117 NW Thornridge Ave",
      city: "Portland",
      state: "OR",
      zip: "97229",
      price: 912500,
      beds: 5,
      baths: 4,
      sqft: 3620,
      description:
        "New construction in Bethany with a private backyard studio, oversized island kitchen, and primary suite with a spa-style bath.",
      status: "pending",
      photoTheme: "modern",
    },
    {
      slug: "234-se-milbrook-ct",
      address: "234 SE Milbrook Ct",
      city: "Portland",
      state: "OR",
      zip: "97214",
      price: 549000,
      beds: 3,
      baths: 2,
      sqft: 1740,
      description:
        "Classic 1920s bungalow on a quiet Hawthorne-adjacent cul-de-sac, fully rewired and re-piped with a rebuilt front porch made for evenings.",
      status: "coming-soon",
      photoTheme: "colonial",
    },
  ],
  testimonials: [
    {
      quote:
        "Jordan sent us a link before we even met in person — bio, reviews, current listings, all of it. It made the whole process feel a lot less like a gamble.",
      author: "Priya & Dev Nair",
      context: "First-time buyers, Sellwood",
    },
    {
      quote:
        "We shared Jordan's card with three other families at our open house. Way better than digging through a stack of business cards later.",
      author: "Marcus Webb",
      context: "Seller, NW Thornridge Ave",
    },
  ],
};
