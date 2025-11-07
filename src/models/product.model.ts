export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  details?: {
    origin?: string;
    roast?: string;
    weight?: string;
    flavor?: string[];
  };
}

