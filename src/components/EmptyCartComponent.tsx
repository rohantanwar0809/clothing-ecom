import React from 'react';
import LottieView from 'lottie-react-native';
import CustomButton from './CustomButton';
import { TouchableOpacityProps, View } from 'react-native';
import emptyCart from '../../assets/Animations/empty-carts.json';

export default function EmptyCartComponent({ ...rest }: TouchableOpacityProps) {
  return (
    <>
      <View
        style={{
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          margin: 5,
        }}
      >
        <LottieView
          source={emptyCart}
          autoPlay
          loop
          style={{
            width: 400,
            height: 400,
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
          }}
        />
      </View>
      <CustomButton className='m-10 mb-36' title='Shop More' {...rest} />
    </>
  );
}
