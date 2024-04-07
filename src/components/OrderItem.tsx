import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../types';
import { formatPrice } from '../utils';

const OrderItem = ({ order }: { order: Product }) => {
  const { image, title, price } = order;
  return (
    <View style={styles.orderItemContainer}>
      <Image source={{ uri: image }} style={styles.orderItemImage} />
      <View style={styles.orderItemDetails}>
        <Text style={styles.orderItemName}>{title}</Text>
        <Text style={styles.orderItemPrice}>{formatPrice(price)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  orderItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  orderItemDetails: {
    flex: 1,
  },
  orderItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderItemPrice: {
    color: '#333',
  },
});

export default OrderItem;
