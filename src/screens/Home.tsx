import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Routes from '../routes/Routes';
import { RootState } from '../app/store';
import { ProductsState } from '../types';

const Home = () => {
  // const { name } = useSelector<RootState, ProductsState>((state) => state.user);
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-bold text-slate-400'>Welcome User</Text>
    </View>
  );
};

export default Home;
