import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Listing from '../screens/Listing';
import Checkout from '../screens/Checkout';
import PaymentGateway from '../screens/PaymentGateway';
import Orders from '../screens/Orders';

const Tab = createBottomTabNavigator();
const CheckoutStack = createNativeStackNavigator();

function Routes() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name='Listing'
        component={Listing}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='cube-unfolded'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CheckoutStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='cart' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Orders'
        component={Orders}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='clipboard-check'
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function CheckoutStackScreen() {
  return (
    <CheckoutStack.Navigator>
      <CheckoutStack.Screen
        name='Checkout'
        component={Checkout}
        options={{ headerShown: false }}
      />
      <CheckoutStack.Screen
        name='PaymentGateway'
        component={PaymentGateway}
        options={{ headerTitle: 'Payment', headerBackVisible: false }}
      />
    </CheckoutStack.Navigator>
  );
}

export default Routes;
