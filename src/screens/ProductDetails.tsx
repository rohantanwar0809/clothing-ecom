import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import MyButton from "../components/CustomButton1";
import { Product } from "../types";
import { formatPrice } from "../utils";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
  const { id, title, price, description, category, image, rating } =
    props.product;
  console.log(props);
  return (
    <ScrollView className="w-screen h-screen flex-1 bg-white">
      <View className=" items-center justify-center p-2 ">
        <View className=" p-2">
          <View className="flex flex-col items-center justify-center shadow-md rounded-lg">
            <Image
              source={{
                uri: image,
              }}
              className="w-full h-64  rounded-lg bg-white"
              resizeMode="contain"
            />
            <View className="mt-4">
              <Text className="text-lg font-semibold">{category}</Text>
              <Text className="text-2xl font-semibold">{title}</Text>
              <View className="mt-2 text-lg font-semibold text-gray-500">
                {description.split("\n").map((desc, index) => (
                  <Text key={index} className="text-lg">
                    {desc}
                  </Text>
                ))}
              </View>
            </View>
            <View className="mt-4">
              <Text className="text-lg font-semibold">
                Price: {formatPrice(price)}
              </Text>
            </View>
          </View>
          <View className="flex flex-row justify-between">
            <MyButton
              title="Add To Bag"
              buttonType="outline"
              textColor="text-black"
              buttonSize="md"
            />
            <MyButton buttonSize="md" title="Proceed To Bag" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
