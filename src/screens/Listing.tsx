import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import { clothes, products } from "../static/products";
import ListingCard from "../components/ListingCard";

const Listing = () => {
  const [productsData, setProductsData] = useState(products.slice(0, 10));
  return (
    <View className="w-screen h-screen bg-white items-center justify-center p-2">
      <View className=" shadow-md">
        <FlatList
          data={clothes}
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
          //   onEndReachedThreshold={0.5}
          //   onEndReached={() => {
          //     setProductsData((prev) => [
          //       ...prev,
          //       ...products.slice(prev.length, prev.length + 10),
          //     ]);
          //   }}
        />
      </View>
    </View>
  );
};

export default Listing;
