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
