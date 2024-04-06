import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequested } from "../app/store/slices/productSlice";
import { RootState } from "../app/store";
import { Product } from "../types";
import { Text } from "react-native";
import SkeletonContainerComponent from "../components/SkeletonContainerComponent";

const Listing = () => {
  const products: Product[] = useSelector(
    (state: RootState) => state.products.products
  );
  const loading: boolean = useSelector(
    (state: RootState) => state.products.loading
  );
  const error: string | null = useSelector(
    (state: RootState) => state.products.error
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequested());
  }, []);
  return (
    <View className="w-screen h-screen bg-white items-center justify-center p-2">
      {loading && <SkeletonContainerComponent />}
      {error && <Text>Error: {error}</Text>}
      {products.length === 0 && (
        <View className=" shadow-md">
          <FlatList
            data={products}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              padding: 2,
            }}
            columnWrapperStyle={{
              justifyContent: "space-between",
              gap: 10,
              marginVertical: 10,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ListingCard
                image={item.image}
                title={item.title}
                price={+item.price}
              />
            )}
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
