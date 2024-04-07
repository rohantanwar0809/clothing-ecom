import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequested } from "../store/slices/productSlice";
import { RootState } from "../store";
import { Product, SortType } from "../types";
import { Text } from "react-native";
import SkeletonContainerComponent from "../components/SkeletonContainerComponent";
import ListingSearch from "../components/ListingSearch";
import SortIcon from "../components/SortIcon";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState({
    type: "price",
    order: SortType.ASC,
  });

  useEffect(() => {
    dispatch(
      fetchProductsRequested({
        query: searchQuery,
        sortBy,
      })
    );
  }, [searchQuery, sortBy.order]);

  const renderContentHandler = (): JSX.Element => {
    let content = <></>;

    if (loading) {
      content = <SkeletonContainerComponent />;
    } else if (error) {
      content = <Text>Error: {error}</Text>;
    } else if (products?.length !== 0) {
      content = (
        <View className="shadow-md">
          <FlatList
            data={products}
            numColumns={products.length < 2 ? 1 : 2}
            keyExtractor={(item) => item.id.toString()}
            key={products.length < 2 ? "1" : "2"}
            contentContainerStyle={{
              padding: 2,
            }}
            columnWrapperStyle={
              products.length > 2
                ? {
                    justifyContent: "space-between",
                    gap: 10,
                    marginVertical: 10,
                  }
                : null
            }
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                className={products.length > 2 ? "w-[50%]" : "w-full"}
                key={item.id}
              >
                <ListingCard {...item} />
              </View>
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
      );
    }

    return content;
  };

  return (
    <View className="w-screen h-screen bg-white items-center justify-center p-2">
      <View
        className="
      flex-row justify-between items-center mb-2 mt-12
        w-full h-12 shadow-md"
      >
        <ListingSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <SortIcon sortBy={sortBy} setSortBy={setSortBy} />
      </View>
      {renderContentHandler()}
    </View>
  );
};

export default Listing;
