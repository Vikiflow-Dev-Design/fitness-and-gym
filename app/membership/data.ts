export interface Plan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

export const monthlyPlans: Plan[] = [
  {
    id: "basic-monthly",
    name: "Basic",
    price: 15000, // ~$30 USD
    duration: "month",
    features: [
      "Access to gym equipment",
      "Basic workout plans",
      "Locker room access",
      "Free WiFi",
      "Water dispenser",
    ],
  },
  {
    id: "premium-monthly",
    name: "Premium",
    price: 25000, // ~$50 USD
    duration: "month",
    features: [
      "All Basic features",
      "Group fitness classes",
      "Personal trainer consultation",
      "Nutrition guidance",
      "Towel service",
      "Smoothie bar discount",
    ],
    popular: true,
  },
  {
    id: "elite-monthly",
    name: "Elite",
    price: 40000, // ~$80 USD
    duration: "month",
    features: [
      "All Premium features",
      "2x Personal training sessions",
      "Massage therapy session",
      "Sauna & spa access",
      "Guest passes",
      "Priority class booking",
      "Exclusive member events",
    ],
  },
];

export const annualPlans: Plan[] = [
  {
    id: "basic-annual",
    name: "Basic Annual",
    price: 150000, // ~$300 USD
    duration: "year",
    features: [
      "All Basic monthly features",
      "2 months free",
      "Free gym bag",
      "Fitness assessment",
    ],
  },
  {
    id: "premium-annual",
    name: "Premium Annual",
    price: 250000, // ~$500 USD
    duration: "year",
    features: [
      "All Premium monthly features",
      "2 months free",
      "Free gym bag & merchandise",
      "Quarterly fitness assessment",
      "Nutrition consultation",
    ],
    popular: true,
  },
  {
    id: "elite-annual",
    name: "Elite Annual",
    price: 400000, // ~$800 USD
    duration: "year",
    features: [
      "All Elite monthly features",
      "2 months free",
      "Complete gym merchandise set",
      "Monthly fitness assessment",
      "Quarterly body composition analysis",
      "Priority support",
      "VIP member events",
    ],
  },
];
