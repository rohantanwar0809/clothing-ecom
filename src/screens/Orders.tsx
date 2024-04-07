import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ordersSelector } from '../store/selectors';
import Order from '../components/OrderItem2';
import BackgroundTextComponent from '../components/BackgroundTextComponent';

const Orders = () => {
  const orders = useSelector(ordersSelector);

  return (
    <View style={styles.container}>
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={({ item }) => <Order order={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <BackgroundTextComponent text='No Orders found...' />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Orders;
