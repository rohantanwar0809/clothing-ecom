import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { formatPrice } from "../utils/price";

interface ListingCardProps {
  image: string;
  title: string;
  price: number;
}

const ListingCard: React.FC<ListingCardProps> = (props) => {
  const { image, title, price } = props;
  return (
    <View
      className="rounded-lg shadow-lg w-[50%] p-2
  
    "
    >
      <Image
        source={{
          uri: image,
        }}
        className="w-full h-48 object-cover rounded-lg"
      />
      <Text className="text-lg font-semibold">{title}</Text>
      <Text className="text-sm text-gray-500">{formatPrice(price)}</Text>
    </View>
  );
};

export default ListingCard;
