export const services = [
  {
    id: 'rinse',
    name: 'Rinse',
    time: '7 min',
    tagline: 'The quick one before you head out.',
    features: ['High-pressure rinse', 'Foam bath', 'Spot-free rinse', 'Air dry'],
  },
  {
    id: 'shine',
    name: 'Shine',
    time: '12 min',
    tagline: 'Our most popular wash, top to bottom.',
    features: ['Everything in Rinse', 'Wheel & tire cleaning', 'Tire shine', 'Triple foam wax', 'Hand towel dry'],
  },
  {
    id: 'detail',
    name: 'Full Detail',
    time: '55 min',
    tagline: 'Inside and out, like it just left the lot.',
    features: ['Everything in Shine', 'Full interior vacuum', 'Dash & console wipe-down', 'Window clean in & out', 'Leather / seat conditioning'],
  },
]

export const pricingPlans = [
  {
    id: 'single-rinse',
    ticketNo: '014',
    name: 'Rinse',
    price: 9,
    unit: 'wash',
    description: 'A fast clean for everyday driving.',
    highlight: false,
  },
  {
    id: 'single-shine',
    ticketNo: '027',
    name: 'Shine',
    price: 18,
    unit: 'wash',
    description: 'Wax, wheels, and a proper shine.',
    highlight: true,
  },
  {
    id: 'single-detail',
    ticketNo: '041',
    name: 'Full Detail',
    price: 45,
    unit: 'wash',
    description: 'Full interior and exterior refresh.',
    highlight: false,
  },
  {
    id: 'unlimited',
    ticketNo: '108',
    name: 'Unlimited Shine',
    price: 34,
    unit: 'month',
    description: 'Unlimited Shine washes, any day, one car.',
    highlight: false,
    monthly: true,
  },
]

export const galleryImages = [
  {
    id: 1,
    label: 'Foam bath in progress',
    image: '/images/gallery/foam-wash.jpg',
  },

  {
    id: 2,
    label: 'Wheel & tire detail',
    image: '/images/gallery/OIP.webp',
  },

  {
    id: 3,
    label: 'Spot-free rinse arch',
    image: '/images/gallery/1566233283-shiny-car_2.1.1.webp',
  },

  {
    id: 4,
    label: 'Premium car detailing',
    image: '/images/gallery/detailing.jpg',
  },

  {
    id: 5,
    label: 'Fresh & shiny finish',
    image: '/images/gallery/wheel+detailing+snow+foam.webp',
  },
]
export const testimonials = [
  {
    id: 1,
    quote: 'In and out in ten minutes and my car looked better than a dealership detail.',
    name: 'Priya N.',
    role: 'Unlimited member since 2023',
  },
  {
    id: 2,
    quote: 'The interior detail got out stains I thought were permanent. Genuinely impressed.',
    name: 'Marcus T.',
    role: 'Full Detail customer',
  },
  {
    id: 3,
    quote: 'Friendly crew, fair prices, and my tires actually shine now.',
    name: 'Dana K.',
    role: 'Shine regular',
  },
]

export const stats = [
  { id: 1, value: '12', label: 'Years washing this town' },
  { id: 2, value: '48K+', label: 'Cars shined last year' },
  { id: 3, value: '4.9', label: 'Average customer rating' },
  { id: 4, value: '3', label: 'Locations, one standard' },
]
