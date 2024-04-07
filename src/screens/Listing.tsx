import { View, FlatList, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import ListingCard from '../components/ListingCard';
import SkeletonContainerComponent from '../components/SkeletonContainerComponent';
import {
  loadingErrorSelector,
  productsLoadingSelector,
  productsSelector,
} from '../store/selectors';
import {
  fetchProductsRequested,
  selectProduct,
} from '../store/slices/productSlice';

const Listing = () => {
  const products = useSelector(productsSelector);
  const loading = useSelector(productsLoadingSelector);
  const error = useSelector(loadingErrorSelector);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequested());
  }, []);

  return (
    <View className='w-screen h-screen bg-white items-center justify-center p-2'>
      {loading ? (
        <SkeletonContainerComponent />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <View className=' shadow-md'>
          <FlatList
            data={products}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              padding: 2,
            }}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              gap: 10,
              marginVertical: 10,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ListingCard
                image={item.image}
                title={item.title}
                price={+item.price}
                onPress={() => {
                  dispatch(selectProduct(item));
                  navigation.navigate('ProductDetails' as never);
                }}
              />
            )}
            // [TODO: LAZY LOADING ITEMS]
            // onEndReachedThreshold={0.5}
            // onEndReached={() => {
            //   setProductsData((prev) => [
            //     ...prev,
            //     ...clothes.slice(prev.length, prev.length + 4),
            //   ]);
            // }}
          />
        </View>
      )}
    </View>
  );
};

export default Listing;
