import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { OrderType } from '../types';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../store/slices/orderSlice';
import OrderItem from './OrderItem';
import CustomButton from './CustomButton';
import { formatDate } from '../utils';
// import { OrderType } from '../types';

// // const formatDate = (date: string) => {
// //   // Implement logic to format date for display (e.g., using moment.js)
// // };

// const Order = ({ order }: { order: OrderType }) => {
//   const dispatch = useDispatch();
//   return (
//     <View style={styles.orderContainer}>
//       <Text>Order ID: {order.id}</Text>
//       <Text>Items: {order.items.join(', ')}</Text>
//       <Text>Date: {order.date}</Text>
//       <Text>Status: {order.status}</Text>
//       {order.status === 'pending' && (
//         <Button
//           title='Deliver'
//           onPress={() => dispatch(removeOrder(order.id))}
//           disabled={order.status !== 'pending'}
//         />
//       )}
//     </View>
//   );
// };

const OrderItr = ({ order }: { order: OrderType }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.orderContainer}>
      <Text style={styles.dateHeader}>{formatDate(order.date)}</Text>
      <Text className='text-lg font-bold text-pink-500'>Items:</Text>
      {/* Loop through the items array and display each item */}
      <FlatList
        data={order.items}
        renderItem={({ item }) => <OrderItem order={item} />} // Assuming items have name and quantity properties
        // keyExtractor={(item) => item.id} // Use unique identifier for each item
      />
      {order.status === 'pending' && (
        <CustomButton
          title='Deliver'
          onPress={() => dispatch(removeOrder(order.id))}
          disabled={order.status !== 'pending'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
    padding: 5,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: '#f5f5f5',
  },
});

export default OrderItr;
