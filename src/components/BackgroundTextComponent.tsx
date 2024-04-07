import React from 'react';
import { View, Text } from 'react-native';

export default function BackgroundTextComponent({ text }: { text: string }) {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-bold text-slate-400'>{text}</Text>
    </View>
  );
}
