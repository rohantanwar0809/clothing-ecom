import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  textColor?: string;
  buttonSize?: string;
  buttonType?: string;
}

const CustomButton = ({
  title,
  textColor = 'text-white',
  buttonType = 'normal',
  buttonSize = 'lg',
  ...rest
}: CustomButtonProps) => {
  const buttonWidth =
    buttonSize === 'sm' ? 'w-28' : buttonSize === 'md' ? 'w-46' : 'w-auto';
  const { disabled } = rest;
  const btnType =
    buttonType === 'normal'
      ? 'bg-pink-500'
      : 'bg-white border-gray-200 border-4';
  return (
    <TouchableOpacity
      {...rest}
      className={`${btnType} ${
        disabled ? 'bg-gray-200' : undefined
      } ${buttonWidth} mt-5 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`}
    >
      <Text className={`${textColor} text-lg font-bold text-center`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
