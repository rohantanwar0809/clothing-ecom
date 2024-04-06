// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import { Product } from '../types';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import React from 'react';

// interface CartItemProps {
//   cartItem: Product;
//   cartItems: Product[];
//   onRemove: () => void;
// }

// const CartItem: React.FC<CartItemProps> = ({
//   cartItem,
//   onRemove,
//   cartItems,
// }) => {
//   const productExists = cartItems.find((item) => item.id === cartItem.id);
//   if (!productExists) {
//     return null;
//   }
//   return (
//     <View style={styles.cartItem}>
//       <Image
//         source={{ uri: cartItem.image }}
//         style={styles.productImage}
//         resizeMode='contain'
//       />
//       <View style={styles.productDetails}>
//         <Text style={styles.productTitle}>{cartItem.title}</Text>
//         <Text style={styles.productPrice}>Price: ₹{cartItem.price}</Text>
//         {/* {product.description && (
//           <Text style={styles.productDescription}>{product.description}</Text>
//         )} */}

//         {cartItem.rating && (
//           <Text style={styles.productRating}>
//             Rating: {cartItem.rating.rate}
//           </Text>
//         )}
//       </View>
//       <MaterialCommunityIcons
//         name='trash-can'
//         color='black'
//         size={30}
//         onPress={onRemove}
//       />
//     </View>
//   );
// };

// export default CartItem;

// const styles = StyleSheet.create({
//   cartItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     margin: 5,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 5,
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//   },
//   productDetails: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   productRating: {
//     fontSize: 12,
//     color: 'blue',
//   },
//   productPrice: {
//     // Added style for price
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   productDescription: {
//     fontSize: 14,
//   },
// });

import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image, View, Text } from 'react-native';
import { Product } from '../types';
import QuantityInput from './QuantityInput';

interface CartItemProps {
  cartItem: Product;
  cartItems: Product[];
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  onRemove,
  cartItems,
}) => {
  const productExists = cartItems.find((item) => item.id === cartItem.id);
  if (!productExists) {
    return null;
  }

  return (
    <View className='flex flex-row items-center px-4 py-2 rounded-lg bg-gray-200 shadow-md'>
      <Image
        source={{ uri: cartItem.image }}
        className='w-20 h-20 object-contain mr-4'
        resizeMode='contain'
      />
      <View className='flex-1'>
        <Text className='text-base font-bold'>{cartItem.title}</Text>
        <Text className='text-sm font-bold mb-2'>Price: ₹{cartItem.price}</Text>
        {/* {product.description && (
          <Text style={styles.productDescription}>{product.description}</Text>
        )} */}
        {/* <View className='flex flex-row justify-between'> */}
        {/* <QuantityInput size='sm' /> */}
        {cartItem.rating && (
          <Text className='text-md  text-orange-700'>
            Rating: {cartItem.rating.rate}
          </Text>
        )}
        {/* </View> */}
      </View>
      <MaterialCommunityIcons
        name='trash-can'
        color='black'
        size={30}
        onPress={onRemove}
      />
    </View>
  );
};

export default CartItem;
