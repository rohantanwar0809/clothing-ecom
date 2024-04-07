import moment from 'moment';
import { Product } from '../types';

// function to format price in INR
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
};

export const formatDate = (dateString: string) => {
  const dateMoment = moment(dateString);
  return dateMoment.format('MMMM Do, YYYY, HH:mm a');
};

export const getPricesForCart = (cartItems: Product[]) => {
  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((cartItem) => (subtotal += cartItem.price));
    return subtotal;
  };

  const calculateGST = () => {
    return calculateSubtotal() * 0.18;
  };

  const totalPrice = formatPrice(calculateSubtotal() + calculateGST());

  return { calculateSubtotal, calculateGST, totalPrice };
};
