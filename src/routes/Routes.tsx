import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Checkout from "../screens/Checkout";
import Home from "../screens/Home";
import Listing from "../screens/Listing";
import PaymentGateway from "../screens/PaymentGateway";

const Tab = createBottomTabNavigator();
const CheckoutStack = createNativeStackNavigator();

function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Listing"
        component={Listing}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cube-unfolded"
              color={color}
              size={26}
            />
          ),
          title: "Products",
          headerTitleAlign: "left",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CheckoutStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function CheckoutStackScreen() {
  return (
    <CheckoutStack.Navigator>
      <CheckoutStack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false }}
      />
      <CheckoutStack.Screen
        name="PaymentGateway"
        component={PaymentGateway}
        options={{ headerShown: false }}
      />
    </CheckoutStack.Navigator>
  );
}

export default Routes;
