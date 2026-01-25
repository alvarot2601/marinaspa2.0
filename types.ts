export interface ServiceItem {
  name: string;
  price?: string;
  description?: string;
  duration?: string;
}

export interface ServiceCategory {
  title: string; // h2 or h3
  description: string; // Intro paragraph
  items: ServiceItem[];
}

export interface PageSEO {
  title: string;
  description: string;
  path: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}