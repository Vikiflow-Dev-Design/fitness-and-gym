export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "gym-1",
    title: "Main Workout Area",
    category: "Gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070",
    description: "State-of-the-art equipment in our spacious main workout area",
  },
  {
    id: "gym-2",
    title: "Free Weights Section",
    category: "Gym",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070",
    description: "Comprehensive free weights area for strength training",
  },
  {
    id: "pool-1",
    title: "Indoor Swimming Pool",
    category: "Swimming",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070",
    description: "25-meter indoor swimming pool with temperature control",
  },
  {
    id: "pool-2",
    title: "Aqua Fitness Area",
    category: "Swimming",
    image:
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=2070",
    description: "Dedicated area for water aerobics and aqua fitness classes",
  },
  {
    id: "spa-1",
    title: "Relaxation Room",
    category: "Spa",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070",
    description: "Tranquil relaxation room for post-workout recovery",
  },
  {
    id: "spa-2",
    title: "Massage Treatment Room",
    category: "Spa",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070",
    description: "Professional massage and treatment rooms",
  },
  {
    id: "gym-3",
    title: "Cardio Section",
    category: "Gym",
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069",
    description: "Modern cardio equipment with personal entertainment systems",
  },
  {
    id: "spa-3",
    title: "Sauna",
    category: "Spa",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070",
    description: "Traditional wooden sauna for relaxation and recovery",
  },
  {
    id: "pool-3",
    title: "Kids Pool Area",
    category: "Swimming",
    image:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070",
    description: "Safe and fun swimming area for children",
  },
];
