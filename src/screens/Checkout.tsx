import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formatPrice, getPricesForCart } from '../utils';
import CustomButton from '../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsSelector } from '../app/selectors';
import { removeItemFromCart } from '../app/slices/cartSlice';
import { Product } from '../types';
import CartItem from '../components/CartItem';
import EmptyCartComponent from '../components/EmptyCartComponent';

const Checkout = () => {
  const cartItems = useSelector(cartItemsSelector);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { calculateGST, calculateSubtotal, totalPrice } =
    getPricesForCart(cartItems);

  const handleRemove = (productToRemove: Product) => {
    dispatch(removeItemFromCart(productToRemove));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.uniqueId}
            cartItem={cartItem}
            cartItems={cartItems}
            onRemove={() => handleRemove(cartItem)}
          />
        ))}
      </ScrollView>
      {cartItems.length === 0 ? (
        <EmptyCartComponent
          onPress={() => navigation.navigate('Listing' as never)}
        />
      ) : (
        <View style={styles.orderSummary}>
          <Text style={styles.summaryText}>
            Subtotal: {formatPrice(calculateSubtotal())}
          </Text>
          <Text style={styles.summaryText}>
            GST (18%): {formatPrice(calculateGST())}
          </Text>
          <Text style={styles.summaryText}>Total Price: {totalPrice}</Text>
          <CustomButton
            title='Place Order'
            onPress={() => navigation.navigate('PaymentGateway' as never)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  productRating: {
    fontSize: 12,
    color: 'blue',
  },
  orderSummary: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  summaryText: {
    marginBottom: 5,
  },
  orderButton: {
    marginTop: 10,
  },
  productPrice: {
    // Added style for price
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Checkout;
