export const travelers = [
  { id: "paresh", name: "Paresh Kumar Sahoo" },
  { id: "akash", name: "Akash Kumar" },
  { id: "prerna", name: "Prerna Kumari Singh" },
  { id: "navneeta", name: "Navneeta Prasad" },
];

export const documentTypes = [
  { id: "aadhar", title: "Aadhar Card" },
  { id: "pan", title: "PAN Card" },
  { id: "passport", title: "Passport" },
  { id: "insurance", title: "Travel Insurance" },
  { id: "evisa", title: "E-Visa" },
];

export const flights = [
  {
    id: 1,
    from: "Bangalore",
    fromCode: "BLR",
    to: "Hanoi",
    toCode: "HAN",
    departureDate: "Jan 3, 2025",
    departureTime: "Evening",
    arrivalDate: "Jan 4, 2025",
    arrivalTime: "5:50 AM",
  },
  {
    id: 2,
    from: "Hanoi",
    fromCode: "HAN",
    to: "Da Nang",
    toCode: "DAD",
    departureDate: "Jan 7, 2025",
    departureTime: "6:00 AM",
    arrivalTime: "7:30 AM",
  },
  {
    id: 3,
    from: "Da Nang",
    fromCode: "DAD",
    to: "Ho Chi Minh",
    toCode: "SGN",
    departureDate: "Jan 10, 2025",
    departureTime: "6:00 AM",
    arrivalTime: "7:30 AM",
  },
  {
    id: 4,
    from: "Ho Chi Minh",
    fromCode: "SGN",
    to: "Bangalore",
    toCode: "BLR",
    departureDate: "Jan 12, 2025",
    departureTime: "7:15 PM",
    arrivalTime: "11:35 PM",
    isReturn: true,
  },
];

export const itinerary = [
  {
    day: 1,
    date: "Jan 3",
    location: "Bangalore → Hanoi",
    activities: [
      {
        time: "Evening",
        title: "Departure from Bangalore",
        description: "Flight to Hanoi, Vietnam",
        type: "flight" as const,
      },
    ],
  },
  {
    day: 2,
    date: "Jan 4",
    location: "Hanoi",
    activities: [
      {
        time: "5:50 AM",
        title: "Arrive in Hanoi",
        description: "Nội Bài International Airport",
        type: "flight" as const,
      },
      {
        time: "Morning",
        title: "Check-in & Rest",
        description: "Hotel check-in and freshen up",
        type: "hotel" as const,
      },
      {
        time: "Afternoon",
        title: "Explore Old Quarter",
        description: "Walk through the historic streets",
        type: "activity" as const,
      },
    ],
  },
  {
    day: 3,
    date: "Jan 5",
    location: "Hanoi",
    activities: [
      {
        time: "Morning",
        title: "Ho Chi Minh Mausoleum",
        description: "Visit the historic mausoleum",
        type: "activity" as const,
      },
      {
        time: "Afternoon",
        title: "Temple of Literature",
        description: "Vietnam's first university",
        type: "activity" as const,
      },
      {
        time: "Evening",
        title: "Water Puppet Show",
        description: "Traditional Vietnamese performance",
        type: "activity" as const,
      },
    ],
  },
  {
    day: 4,
    date: "Jan 6",
    location: "Hanoi",
    activities: [
      {
        time: "Full Day",
        title: "Ha Long Bay Day Trip",
        description: "Cruise through the iconic bay",
        type: "activity" as const,
      },
    ],
  },
  {
    day: 5,
    date: "Jan 7",
    location: "Hanoi → Da Nang",
    activities: [
      {
        time: "6:00 AM",
        title: "Flight to Da Nang",
        description: "Arrive at 7:30 AM",
        type: "flight" as const,
      },
      {
        time: "Afternoon",
        title: "My Khe Beach",
        description: "Relax at the beautiful beach",
        type: "activity" as const,
      },
    ],
  },
  {
    day: 6,
    date: "Jan 8",
    location: "Hoi An",
    activities: [
      {
        time: "Morning",
        title: "Hoi An Ancient Town",
        description: "UNESCO World Heritage Site",
        type: "activity" as const,
      },
      {
        time: "Afternoon",
        title: "Tailoring Experience",
        description: "Custom clothing shopping",
        type: "activity" as const,
      },
      {
        time: "Evening",
        title: "Lantern Festival",
        description: "Beautiful night market",
        type: "activity" as const,
      },
    ],
  },
  {
    day: 7,
    date: "Jan 9",
    location: "Da Nang",
    activities: [
      {
        time: "Morning",
        title: "Ba Na Hills",
        description: "Golden Bridge & French Village",
        type: "activity" as const,
      },
      {
        time: "Evening",
        title: "Dragon Bridge",
        description: "Watch the fire-breathing show",
        type: "activity" as const,
      },
    ],
  },
  {
    day: 8,
    date: "Jan 10",
    location: "Da Nang → Ho Chi Minh",
    activities: [
      {
        time: "6:00 AM",
        title: "Flight to Ho Chi Minh",
        description: "Arrive at 7:30 AM",
        type: "flight" as const,
      },
      {
        time: "Afternoon",
        title: "Cu Chi Tunnels",
        description: "Historic war tunnels tour",
        type: "activity" as const,
      },
    ],
  },
  {
    day: 9,
    date: "Jan 11",
    location: "Ho Chi Minh City",
    activities: [
      {
        time: "Morning",
        title: "War Remnants Museum",
        description: "Learn about Vietnam's history",
        type: "activity" as const,
      },
      {
        time: "Afternoon",
        title: "Ben Thanh Market",
        description: "Shopping and street food",
        type: "activity" as const,
      },
      {
        time: "Evening",
        title: "Farewell Dinner",
        description: "Rooftop dining experience",
        type: "food" as const,
      },
    ],
  },
  {
    day: 10,
    date: "Jan 12",
    location: "Ho Chi Minh → Bangalore",
    activities: [
      {
        time: "7:15 PM",
        title: "Return Flight",
        description: "Arrive Bangalore at 11:35 PM",
        type: "flight" as const,
      },
    ],
  },
];
