import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import ProductDetails from '../screens/ProductDetails';
import Routes, { CheckoutStackScreen } from './Routes';
import { chosenItemSelector, headerSelector } from '../store/selectors';

const Stack = createStackNavigator();

function StackRoutes() {
  const chosenItem = useSelector(chosenItemSelector);
  const shouldShowHeaderTitle = useSelector(headerSelector);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Main'
        component={Routes}
        options={{
          headerShown: false,
          headerTitle: 'Back',
        }}
      />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={{
          headerTitle: chosenItem?.displayTitle,
        }}
      />
      <Stack.Screen
        name='Bag'
        component={CheckoutStackScreen}
        options={{
          headerShown: shouldShowHeaderTitle,
          headerTitle: 'Cart',
        }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;
