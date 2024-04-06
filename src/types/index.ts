interface Product {
  id: number;
  title: string;
  displayTitle: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export { Product, ProductsState };
