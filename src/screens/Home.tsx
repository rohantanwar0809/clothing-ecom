import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserState } from "../store/reducers/userSlice";
import Routes from "../Routes";

const Home = () => {
  const { name } = useSelector<RootState, UserState>((state) => state.user);
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold text-slate-400">Welcome {name}</Text>
    </View>
  );
};

export default Home;
