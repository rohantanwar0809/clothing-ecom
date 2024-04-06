import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { setCurrentViewingProduct } from "../store/slices/userSlice";
import { formatPrice } from "../utils";
import { Product } from "../types";

const ListingCard: React.FC<Product> = (props) => {
  const { image, title, price } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <TouchableOpacity
      className="rounded-lg w-[50%] p-2
        bg-white shadow-md 
      "
      onPress={() => {
        navigation.navigate("ProductDetails" as never);
        dispatch(setCurrentViewingProduct({ ...props }));
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        className="w-full h-48 rounded-lg"
        resizeMode="contain"
      />
      <Text className="text-lg font-semibold">{title}</Text>
      <Text className="text-sm text-gray-500">{formatPrice(price)}</Text>
    </TouchableOpacity>
  );
};

export default ListingCard;
