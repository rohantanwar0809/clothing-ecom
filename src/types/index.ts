import store from '../store';

// Common types
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

enum OrderStatus {
  PENDING = 'pending',
  SHIPPED = 'shipped',
  COMPLETED = 'completed',
}
interface OrderType {
  id: string; // Unique identifier for the order [TODO]
  items: Product[];
  status: OrderStatus;
  date: string;
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
  shouldShowHeader: boolean;
}

interface OrderState {
  orders: OrderType[];
}

type RootState = ReturnType<typeof store.getState>;

export {
  Product,
  ProductsState,
  CartState,
  RootState,
  OrderType,
  OrderState,
  OrderStatus,
};
