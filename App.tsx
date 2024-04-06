import "react-native-gesture-handler";
// import './src/config/debug.ts';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import StackRoutes from "./src/routes/StackRoutes";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackRoutes />
        {/* <Routes /> */}
      </NavigationContainer>
    </Provider>
  );
}
