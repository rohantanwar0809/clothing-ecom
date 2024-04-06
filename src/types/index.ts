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

interface CartItemsProps extends Product {
  uniqueId: string;
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product;
}

interface CartState {
  cartItems: CartItemsProps[];
}

export { Product, ProductsState, CartState };
