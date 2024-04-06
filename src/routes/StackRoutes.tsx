import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";
import ProductDetails from "../screens/ProductDetails";
import { clothes } from "../static/products";
import { RootState } from "../store";
import { UserState } from "../store/slices/userSlice";
import Routes from "./Routes";

const Stack = createStackNavigator();

function StackRoutes() {
  const { currentViewingProduct } = useSelector<RootState, UserState>(
    (state) => state.user
  );
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Routes}
        options={{
          headerShown: false,
          headerTitle: "Back",
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        children={() => (
          <ProductDetails product={currentViewingProduct ?? clothes[1]} />
        )}
        options={{
          headerTitle: currentViewingProduct?.title,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;
