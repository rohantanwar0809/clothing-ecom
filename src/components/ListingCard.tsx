import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { formatPrice } from '../utils';

interface ListingCardProps extends TouchableOpacityProps {
  image: string;
  title: string;
  price: number;
}

const ListingCard: React.FC<ListingCardProps> = ({
  image,
  title,
  price,
  ...rest
}) => {
  return (
    <TouchableOpacity
      className='rounded-lg w-[50%] p-2
        bg-white shadow-md 
      '
      {...rest}
    >
      <Image
        source={{
          uri: image,
        }}
        className='w-full h-48 rounded-lg'
        resizeMode='contain'
      />
      <Text className='text-lg font-semibold'>{title}</Text>
      <Text className='text-sm text-gray-500'>{formatPrice(price)}</Text>
    </TouchableOpacity>
  );
};

export default ListingCard;
