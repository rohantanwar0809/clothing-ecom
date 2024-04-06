import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface QuantityInputProps {
  initialValue?: number;
  onChange?: (quantity: number) => void;
  minValue?: number;
  maxValue?: number;
  size?: string;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  initialValue = 1,
  onChange,
  minValue = 1,
  maxValue = 5,
  size = 'lg',
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleIncrement = () => {
    if (maxValue === undefined || quantity < maxValue) {
      setQuantity(quantity + 1);
      onChange?.(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > minValue) {
      setQuantity(quantity - 1);
      onChange?.(quantity - 1);
    }
  };

  return (
    <View
      className={`flex flex-row ${
        size === 'sm' ? 'mb-2 w-18 mt-2' : ''
      } items-center border-2 outline-pink-500 rounded-md p-1`}
    >
      <TouchableOpacity onPress={handleDecrement}>
        <MaterialCommunityIcons
          name='minus'
          size={size === 'sm' ? 12 : 24}
          color='black'
        />
      </TouchableOpacity>
      <Text className='text-base font-extrabold px-4'>{quantity}</Text>
      <TouchableOpacity onPress={handleIncrement}>
        <MaterialCommunityIcons
          name='plus'
          size={size === 'sm' ? 12 : 24}
          color='black'
        />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityInput;
