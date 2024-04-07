import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SortType } from "../types";

interface SortIconProps {
  sortBy: {
    type: string;
    order: SortType;
  };
  setSortBy: React.Dispatch<
    React.SetStateAction<{
      type: string;
      order: SortType;
    }>
  >;
}

const SortIcon: React.FC<SortIconProps> = ({ sortBy, setSortBy }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-center bg-gray-700 text-white  p-2 rounded-md shadow-lg w-[50] h-full"
      onPress={() =>
        setSortBy({
          type: sortBy.type,
          order: sortBy.order === SortType.ASC ? SortType.DESC : SortType.ASC,
        })
      }
    >
      <MaterialCommunityIcons
        name={
          sortBy.order === SortType.ASC ? "sort-ascending" : "sort-descending"
        }
        size={16}
        color="white"
      />
    </TouchableOpacity>
  );
};

export default SortIcon;
