import React from 'react';
import { Review, Amenity, SuiteTier } from './types';
import { KeyIcon, BulbIcon, WifiIcon, CarIcon, ReceptionIcon, ShieldIcon } from './components/Icons';

export const REVIEWS: Review[] = [
  {
    id: 1,
    stars: 5,
    text: "Salon Village has been a game-changer for my business! The suite is beautifully designed, and having 24/7 access allows me to work around my clients' schedules.",
    author: "Jessica Martinez",
    role: "Hair Stylist"
  },
  {
    id: 2,
    stars: 5,
    text: "The amenities here are incredible. Everything is included - WiFi, utilities, even laundry! I can focus 100% on my clients instead of worrying about overhead costs.",
    author: "Marcus Johnson",
    role: "Barber"
  },
  {
    id: 3,
    stars: 5,
    text: "I love the professional atmosphere and the support from management. The location is perfect, and my clients always comment on how clean and luxurious the space is.",
    author: "Alicia Thompson",
    role: "Esthetician"
  },
  {
    id: 4,
    stars: 5,
    text: "Transitioning from booth rental to my own suite at Salon Village was seamless. The privacy allows me to create a personalized experience for each client.",
    author: "Sophia Chen",
    role: "Nail Technician"
  },
  {
    id: 5,
    stars: 5,
    text: "Best investment in my career! The natural lighting in my suite is perfect for makeup applications, and the security system gives me peace of mind.",
    author: "David Rodriguez",
    role: "Makeup Artist"
  },
  {
    id: 6,
    stars: 5,
    text: "Five stars all the way! The free parking, beautiful reception area, and premium location make it easy for my clients to find me.",
    author: "Brittany Williams",
    role: "Lash Artist"
  },
  {
    id: 7,
    stars: 5,
    text: "Management is responsive and professional. The facility is always spotless, and I appreciate the included amenities that would normally cost extra elsewhere.",
    author: "Amanda Foster",
    role: "Massage Therapist"
  },
  {
    id: 8,
    stars: 5,
    text: "I toured several salon suite facilities in Houston, and Salon Village stood out immediately. The quality of the build-out is unmatched.",
    author: "Christine Lee",
    role: "Hair Stylist"
  }
];

export const AMENITIES = [
  { 
    icon: <KeyIcon className="w-8 h-8" />, 
    title: "24/7 Keyless Access",
    description: "Enjoy seamless entry to your workspace anytime, day or night, with our secure keyless access system."
  },
  { 
    icon: <BulbIcon className="w-8 h-8" />, 
    title: "All Utilities Included",
    description: "Focus on your business without worrying about utility bills—everything is covered in your rental."
  },
  { 
    icon: <WifiIcon className="w-8 h-8" />, 
    title: "High-Speed WiFi",
    description: "Stay connected with reliable, high-speed internet to support all your business needs."
  },
  { 
    icon: <CarIcon className="w-8 h-8" />, 
    title: "Free Parking",
    description: "Park hassle-free with complimentary parking included for you and your clients."
  },
  { 
    icon: <ReceptionIcon className="w-8 h-8" />, 
    title: "Shared Reception Area",
    description: "Make a professional first impression with access to our welcoming shared reception space."
  },
  { 
    icon: <ShieldIcon className="w-8 h-8" />, 
    title: "Security System",
    description: "Rest easy knowing your workspace is protected by our advanced security measures."
  }
];

export const PRICING_TIERS: SuiteTier[] = [
  {
    name: "Quality Suite",
    price: "$200/week",
    size: "13' × 10' (130 sq ft)",
    features: [
      "Private salon suite",
      "Professional styling station",
      "Shampoo bowl",
      "Storage cabinets",
      "24/7 access",
      "All utilities included",
      "High-speed WiFi"
    ]
  },
  {
    name: "Bright Suite",
    price: "$270/week",
    size: "13' × 10' (130 sq ft)",
    isPopular: true,
    features: [
      "Everything in Quality Suite, PLUS:",
      "Natural window lighting",
      "Enhanced visibility",
      "Premium location within facility"
    ]
  },
  {
    name: "Premium Suite",
    price: "$550/week",
    size: "200 sq ft",
    features: [
      "Everything in Bright Suite, PLUS:",
      "Extra spacious layout",
      "Front-facing location",
      "Large picture windows",
      "Additional storage cabinets",
      "Premium high-traffic area"
    ]
  }
];

export const INCLUDED_FEATURES = [
  "All utilities (electric, water, AC)",
  "High-speed fiber internet (1GB)",
  "Professional shampoo bowls",
  "Quality styling stations and mirrors",
  "Built-in storage cabinets",
  "24/7 key fob access",
  "On-site laundry facilities",
  "Shared reception/waiting area",
  "Free parking",
  "Full security monitoring",
  "Professional maintenance"
];