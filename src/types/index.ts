export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  condition?: 'new' | 'used';
  stock?: number;
  rating?: number;
  reviews?: number;
  seller?: {
    name: string;
    rating: number;
    sales: number;
  };
  shipping?: {
    free: boolean;
    express: boolean;
  };
  installments?: {
    months: number;
    amount: number;
  };
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  category?: string;
  priceRange?: PriceRange;
  condition?: string;
  shipping?: {
    freeOnly?: boolean;
    expressOnly?: boolean;
  };
}