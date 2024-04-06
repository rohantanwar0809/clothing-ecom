import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

import { formatPrice } from '../utils';
import { clothes } from '../static/products';
import { PRODUCTS } from '../../dbs';

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  description?: string;
  rating?: number;
  price: number; // Assuming a price property for subtotal calculation
}

interface CartItemProps {
  product: Product;
  products: Product[];
  onRemove: (product: Product) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove, products }) => {
  const productExists = products.find((item) => item.id === product.id);
  if (!productExists) {
    return null; // Don't render if product is removed
  }
  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>Price: ₹{product.price}</Text>
        {/* {product.description && (
        <Text style={styles.productDescription}>{product.description}</Text>
      )} */}

        {product.rating && (
          <Text style={styles.productRating}>Rating: {product.rating}</Text>
        )}
      </View>
      <Button title='Remove' onPress={() => onRemove(product)} />
    </View>
  );
};

interface CartScreenProps {
  products: Product[];
}

// Prop: products
const Checkout = () => {
  // const products = PRODUCTS;
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const navigation = useNavigation();
  const calculateSubtotal = () => {
    let subtotal = 0;
    products.forEach((product) => (subtotal += product.price));
    return subtotal;
  };

  const calculateGST = () => {
    return calculateSubtotal() * 0.18;
  };

  const totalPrice = calculateSubtotal() + calculateGST();

  const onRemove = (productToRemove: Product): void => {
    const updatedProducts = products.filter(
      (product) => product.id !== productToRemove.id,
    );
    setProducts(updatedProducts);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            products={products}
            onRemove={onRemove}
          />
        ))}
      </ScrollView>
      <View style={styles.orderSummary}>
        <Text style={styles.summaryText}>
          Subtotal: {formatPrice(calculateSubtotal())}
        </Text>
        <Text style={styles.summaryText}>
          GST (18%): {formatPrice(calculateGST())}
        </Text>
        <Text style={styles.summaryText}>
          Total Price: {formatPrice(totalPrice)}
        </Text>
        <CustomButton
          title='Place Order'
          style={styles.orderButton}
          onPress={() => navigation.navigate('PaymentGateway' as never)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
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
  productDescription: {
    fontSize: 14,
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
