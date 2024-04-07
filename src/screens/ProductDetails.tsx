import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { formatPrice } from '../utils';
import CustomButton from '../components/CustomButton';
import { cartItemsSelector, chosenItemSelector } from '../store/selectors';
import { addItemToCart, updateHeader } from '../store/slices/cartSlice';
import QuantityInput from '../components/QuantityInput';

const ProductDetails = () => {
  const chosenItem = useSelector(chosenItemSelector);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const cartItems = useSelector(cartItemsSelector);
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === chosenItem.id,
  );

  const handleAddToCart = () => {
    dispatch(addItemToCart(chosenItem)); // Dispatch action with the product object
  };

  const handleProceedToCheckout = () => {
    dispatch(updateHeader(true));
    navigation.navigate('Bag' as never);
  };

  const { title, price, description, category, image } = chosenItem;
  return (
    <ScrollView className='w-screen h-screen flex-1 bg-white'>
      <View className=' items-center justify-center p-2 '>
        <View className=' p-2'>
          <View className='flex flex-col items-center justify-center shadow-md rounded-lg'>
            <Image
              source={{
                uri: image,
              }}
              className='w-full h-64  rounded-lg bg-white'
              resizeMode='contain'
            />
            <View className='mt-4'>
              <Text className='text-lg font-semibold'>{category}</Text>
              <Text className='text-2xl font-semibold'>{title}</Text>
              <View className='mt-2 text-lg font-semibold text-gray-500'>
                {description.split('\n').map((desc, index) => (
                  <Text key={index} className='text-lg'>
                    {desc}
                  </Text>
                ))}
              </View>
            </View>
            <View className='w-full mt-4 flex flex-row'>
              <Text className='text-lg font-semibold'>
                Price: {formatPrice(price)}
              </Text>
              {/* <QuantityInput /> */}
            </View>
          </View>
          <View className='flex flex-row justify-between'>
            <CustomButton
              title='Add To Bag'
              buttonType='outline'
              textColor='text-black'
              buttonSize='md'
              onPress={handleAddToCart}
              disabled={existingItemIndex !== -1}
            />
            <CustomButton
              buttonSize='md'
              title='Proceed To Bag'
              onPress={handleProceedToCheckout}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
