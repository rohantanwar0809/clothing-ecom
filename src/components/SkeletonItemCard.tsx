import { View } from 'react-native';
import React from 'react';
import { Skeleton } from 'react-native-skeleton-component';
import { StyleSheet } from 'react-native';

export default function SkeletonItemCard() {
  return (
    <View className='rounded-lg w-[50%] p-2 mt-5'>
      <Skeleton className='w-full h-48 rounded-lg mb-3' />
      <View style={styles.textContainer} className='mb-3'>
        <Skeleton style={styles.title} />
        <Skeleton style={styles.subtitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  avatar: { height: 40, width: 40, borderRadius: 0 },
  textContainer: { flex: 1, marginLeft: 16 },
  title: { width: '90%', height: 14, borderRadius: 7, marginBottom: 5 },
  subtitle: { width: '70%', height: 14, borderRadius: 7 },
  icon: { height: 16, width: 16, borderRadius: 4 },
});
