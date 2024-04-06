import React from 'react';
import { View } from 'react-native';
import { SkeletonContainer } from 'react-native-skeleton-component';
import SkeletonItemCard from './SkeletonItemCard';

export default function SkeletonContainerComponent() {
  return (
    <View className='flex-row flex-wrap'>
      <SkeletonContainer>
        {Array.from(Array(6).keys()).map((_, index) => {
          return <SkeletonItemCard key={index} />;
        })}
      </SkeletonContainer>
    </View>
  );
}
