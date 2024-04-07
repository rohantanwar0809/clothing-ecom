import { View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

interface ListingSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ListingSearch: React.FC<ListingSearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <View className="bg-gray-200 border border-gray-600 p-2 rounded-md shadow-md w-[80%]">
      <View className="flex-row items-center">
        <MaterialCommunityIcons name="magnify" size={24} color="black" />
        <TextInput
          className="ml-2 flex-1"
          placeholder="Search Products..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
    </View>
  );
};

export default ListingSearch;
