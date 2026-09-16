import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-homeo-dilutions",
    title: "Genuine German & Indian Dilutions",
    category: "Prescription Medicines",
    description: "Authentic dilutions from 6C, 30C, 200C to 1M and CM potencies, imported directly from Dr. Reckeweg (Germany), Dr. Willmar Schwabe, and SBL.",
    features: [
      "100% Sealed & Tamper-Evident Bottles",
      "Exact Potency Matching for Doctors' Prescriptions",
      "Sugar Globules & Distilled Water Preparation Available",
      "Temperature-Controlled Storage Standard"
    ],
    iconName: "FlaskConical",
    badge: "Most Popular"
  },
  {
    id: "service-mother-tinctures",
    title: "Pure Mother Tinctures (Q)",
    category: "OTC Medicines",
    description: "Cold-extracted active botanical tinctures prepared according to German and Indian Homeopathic Pharmacopoeia for holistic relief.",
    features: [
      "High Therapeutic Botanical Extraction",
      "Berberis, Crataegus, Echinacea, Thuja & 120+ Varieties",
      "Gentle On Stomach & Non-Habit Forming",
      "Doctor Prescribed & OTC Guidelines Included"
    ],
    iconName: "Leaf",
    badge: "100% Pure"
  },
  {
    id: "service-biochemic",
    title: "Biochemic Tissue Salts (Schussler 12 Salts)",
    category: "Supplements",
    description: "All 12 Schuessler mineral tissue salts in 3X, 6X, 12X, 30X potencies along with specialized 5-Phos, Calc Phos, and Bio-combinations 1 to 28.",
    features: [
      "Replenishes cellular mineral deficiencies",
      "Safe for children, elderly, and expectant mothers",
      "Pure lactose-based fast-dissolving tablets",
      "Ideal for immunity, fatigue, bone & digestive health"
    ],
    iconName: "Pill",
    badge: "Essential Salts"
  },
  {
    id: "service-specialty-drops",
    title: "Specialty Clinical Drops (Dr. Reckeweg & Adel)",
    category: "Prescription Medicines",
    description: "Renowned German formulation drops (R1 to R89 and Adel series) addressing respiratory, renal, cardiovascular, digestive, and nervous conditions.",
    features: [
      "Direct German Import Batch Quality",
      "Targeted multi-component synergistic drops",
      "Clear dosage instructions and dropper caps",
      "Regularly stocked for continuous chronic treatments"
    ],
    iconName: "ShieldPlus",
    badge: "Imported German"
  },
  {
    id: "service-baby-care",
    title: "Gentle Pediatric & Baby Care",
    category: "Baby Care",
    description: "Mild, sweet, side-effect-free homeopathic remedies specially suited for infants, toddlers, and growing children.",
    features: [
      "Teething Colic & Dentition Solutions (Chamomilla, Calc Phos)",
      "Mild cough, cold & seasonal flu syrups",
      "Natural appetite & digestion boosters",
      "Gentle baby massage oils & rash balms"
    ],
    iconName: "Baby",
    badge: "Gentle Care"
  },
  {
    id: "service-personal-care",
    title: "Herbal & Homeopathic Personal Care",
    category: "Personal Care",
    description: "Chemical-free personal grooming, skincare, anti-hairfall shampoos, antiseptic calendula creams, and neem soaps.",
    features: [
      "Arnica & Jaborandi Hair Oils & Conditioners",
      "Calendula Antiseptic Healing Ointments",
      "Herbal Anti-Acne Gels & Face Washes",
      "Sulphur & Echinacea Soaps for Sensitive Skin"
    ],
    iconName: "Sparkles"
  },
  {
    id: "service-medical-devices",
    title: "Health Devices & Diagnostic Equipment",
    category: "Health Devices",
    description: "Reliable home health monitoring equipment including digital BP machines, blood glucose meters, pulse oximeters, and clinical thermometers.",
    features: [
      "Digital Upper Arm Blood Pressure Monitors",
      "Accu-Chek & Dr. Morepen Glucometers & Strips",
      "Fingertip Pulse Oximeters & Nebulizers",
      "Free In-Store Blood Pressure & Pulse Check"
    ],
    iconName: "Activity",
    badge: "Clinical Standard"
  },
  {
    id: "service-chronic-consultation",
    title: "Holistic Chronic Disease Guidance",
    category: "Home Care",
    description: "Personalized case analysis and guidance for chronic complaints including arthritis, asthma, skin allergies, piles/fissures, and gastric issues.",
    features: [
      "Detailed symptom totality evaluation",
      "Dietary & lifestyle management advice",
      "Long-term therapeutic management without side-effects",
      "Follow-up reviews and WhatsApp support"
    ],
    iconName: "Stethoscope",
    badge: "Expert Advice"
  },
  {
    id: "service-whatsapp-delivery",
    title: "Fast Local Delivery in Rajgir",
    category: "Healthcare Products",
    description: "Send your doctor's prescription or medicine list via WhatsApp, and receive your medicines safely at your home in Rajgir.",
    features: [
      "Quick Verification via WhatsApp (09534387930)",
      "Express Delivery across Ashok Nagar, Block More, Rajgir City",
      "Discreet & Protective Packaging",
      "UPI & Cash on Delivery Accepted"
    ],
    iconName: "Truck",
    badge: "Doorstep Service"
  }
];

export const SERVICE_CATEGORIES = [
  "All Services",
  "Prescription Medicines",
  "OTC Medicines",
  "Supplements",
  "Baby Care",
  "Personal Care",
  "Health Devices",
  "Home Care",
  "Healthcare Products"
];
