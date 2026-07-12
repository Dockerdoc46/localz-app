// Mock data matching the sample tables shown in the Figma "home-discovery-feed" / "map-view" screens.
// Replace with real API data once the backend exists.

export type Table = {
  id: string;
  hostName: string;
  hostVerified: boolean;
  hostBio: string;
  title: string;
  description: string;
  mealType: "Breakfast" | "Brunch" | "Lunch" | "Dinner";
  price: number; // euro contribution per seat
  seatsLeft: number;
  seatsTotal: number;
  time: string; // display string, e.g. "Tonight, 8:30 PM"
  fullDateTime: string; // e.g. "Saturday, 8:30 PM"
  city: string;
  address: string;
  tags: string[];
  mapPosition: { top: number; left: number };
};

export const TABLES: Table[] = [
  {
    id: "sofia-dinner",
    hostName: "Sofia",
    hostVerified: true,
    hostBio:
      "Hi! I'm Sofia, I love cooking for friends and sharing the flavors of my homeland...",
    title: "Homemade Pasta",
    description:
      "We'll prepare Tuscan pici pasta with fresh tomato and basil sauce together. An authentic experience in the heart of Trastevere.",
    mealType: "Dinner",
    price: 8,
    seatsLeft: 3,
    seatsTotal: 6,
    time: "Tonight, 8:30 PM",
    fullDateTime: "Saturday, 8:30 PM",
    city: "Rome",
    address: "Via della Lungaretta 12, Rome",
    tags: ["Vegetarian", "Gluten Free"],
    mapPosition: { top: 300, left: 120 },
  },
  {
    id: "lukas-brunch",
    hostName: "Lukas",
    hostVerified: true,
    hostBio: "Berlin local, brunch lover, always up for good conversation over good food.",
    title: "Berlin Brunch Table",
    description:
      "Fresh pastries, eggs, and specialty coffee in a cozy Kreuzberg apartment.",
    mealType: "Brunch",
    price: 10,
    seatsLeft: 1,
    seatsTotal: 4,
    time: "Tonight, 8:30 PM",
    fullDateTime: "Saturday, 10:00 AM",
    city: "Rome",
    address: "Via dei Coronari 4, Rome",
    tags: ["Vegetarian", "Gluten Free"],
    mapPosition: { top: 450, left: 240 },
  },
  {
    id: "clara-lunch",
    hostName: "Clara",
    hostVerified: false,
    hostBio: "Home cook, plant lover, sharing simple family recipes.",
    title: "Sunday Family Lunch",
    description: "A relaxed multi-course lunch the way Clara's grandmother used to make it.",
    mealType: "Lunch",
    price: 9,
    seatsLeft: 4,
    seatsTotal: 8,
    time: "Tonight, 8:30 PM",
    fullDateTime: "Sunday, 1:00 PM",
    city: "Rome",
    address: "Piazza Trilussa 8, Rome",
    tags: ["Vegetarian", "Gluten Free"],
    mapPosition: { top: 520, left: 150 },
  },
];

export function getTableById(id: string): Table | undefined {
  return TABLES.find((t) => t.id === id);
}
