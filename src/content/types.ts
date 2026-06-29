export type ServiceCategorySlug =
  | "naraschivanie"
  | "uhod"
  | "okrashivanie"
  | "strizhki"
  | "prichyoski";

export interface ServiceCategory {
  slug: ServiceCategorySlug;
  title: string;
  description: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  category: ServiceCategorySlug;
  title: string;
  shortDescription: string;
  description: string;
  priceFrom: number;
  unit: string;
  duration: string;
  image: string;
  src?: string;
  faq: ServiceFaqItem[];
  featured?: boolean;
}

export interface Master {
  slug: string;
  name: string;
  specialization: string;
  experience: string;
  photo: string;
  photoSrc?: string;
  bio: string;
}

export type PortfolioTechnique = "Капсульное" | "Невидимое" | "Лента" | "Бисер";
export type PortfolioLength = "До 40 см" | "40–60 см" | "60+ см";
export type PortfolioColor = "Блонд" | "Шатен" | "Брюнет" | "Рыжий";

export interface PortfolioItem {
  id: string;
  title: string;
  technique: PortfolioTechnique;
  length: PortfolioLength;
  color: PortfolioColor;
  before: string;
  after: string;
  beforeSrc?: string;
  afterSrc?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  legalNote: string;
  tagline: string;
  address: string;
  city: string;
  hours: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  whatsappHref: string;
  mapRouteHref: string;
  rating: {
    value: number;
    reviewsCount: number;
    ratingsCount: number;
    photosCount: number;
  };
  satisfaction: {
    staff: number;
    competence: number;
    atmosphere: number;
  };
  amenities: string[];
  social: SocialLink[];
}
