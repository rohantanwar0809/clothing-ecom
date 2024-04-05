import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { formatPrice } from "../utils/price";
import { useNavigation } from "@react-navigation/native";

interface ListingCardProps {
  image: string;
  title: string;
  price: number;
}

const ListingCard: React.FC<ListingCardProps> = (props) => {
  const { image, title, price } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="rounded-lg w-[50%] p-2
        bg-white shadow-md 
      "
      onPress={() => {
        navigation.navigate("ProductDetails" as never);
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
