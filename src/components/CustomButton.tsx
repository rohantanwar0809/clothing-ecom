import React from 'react';
import { View, Button, ViewProps } from 'react-native';

interface CustomButtonProps extends ViewProps {
  title: string;
  onPress: () => void;
}

export default function CustomButton({
  title,
  onPress,
  ...rest
}: CustomButtonProps) {
  return (
    <View {...rest}>
      <Button title={title} onPress={onPress} />
    </View>
  );
}
