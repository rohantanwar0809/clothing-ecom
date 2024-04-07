import { RootState } from '../../types';

const productsSelector = (state: RootState) => state.products.products;
const productsLoadingSelector = (state: RootState) => state.products.loading;
const loadingErrorSelector = (state: RootState) => state.products.error;
const chosenItemSelector = (state: RootState) => state.products.selectedProduct;

// CART
const cartItemsSelector = (state: RootState) => state.cart.cartItems;
const headerSelector = (state: RootState) => state.cart.shouldShowHeader;

export {
  productsSelector,
  productsLoadingSelector,
  loadingErrorSelector,
  chosenItemSelector,
  cartItemsSelector,
  headerSelector,
};
