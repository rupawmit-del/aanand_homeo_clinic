export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  form: string; // e.g. Dilution, Mother Tincture, Drops, Tablets, Syrup, Ointment
  potency?: string; // e.g. 30C, 200C, 1M, Q
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  indication: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  iconName: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'interior';
  imageUrl: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  conditionTreated?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface HealthTipItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
}
