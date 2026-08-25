export type Category = 'MEN' | 'KIDS';

export type GarmentType =
  | 'Shirt'
  | 'Overshirt'
  | 'Jacket'
  | 'Trouser'
  | 'T-Shirt'
  | 'Polo'
  | 'Shorts'
  | 'Set'
  | 'Coat';

export type ProductStatus = 'active' | 'archived';

export type CollectionStatus = 'current' | 'upcoming' | 'archived';

export interface ColorOption {
  name: string;
  hex: string;
  images?: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  code: string;
  category: Category;
  garmentType: GarmentType;
  description: string;
  images: string[];
  sizes: string[];
  colors: ColorOption[];
  material: string;
  moq: string;
  availability: string;
  seasonId: string;
  collectionId: string;
  status: ProductStatus;
  featured: boolean;
  newProduct: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  season: string;
  year: number;
  heroImage: string;
  status: CollectionStatus;
  featured: boolean;
  order: number;
}

export interface Season {
  id: string;
  slug: string;
  name: string;
  year: number;
  description: string;
  status: CollectionStatus;
  order: number;
}

export interface InquiryItem {
  productId: string;
  slug: string;
  name: string;
  code: string;
  category: Category;
  image: string;
  quantity: number;
  size: string;
  color: string;
}

export type Language = 'en' | 'ur';

export type FilterKey = 'ALL' | Category;

export interface CatalogFilters {
  category: FilterKey;
  garmentType: string;
  collectionId: string;
  color: string;
  size: string;
}
