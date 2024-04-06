import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../screens/ProductDetails';
import { clothes } from '../static/products';
import Routes, { CheckoutStackScreen } from './Routes';
import { useSelector } from 'react-redux';
import { chosenItemSelector } from '../app/selectors';

const Stack = createStackNavigator();

function StackRoutes() {
  const chosenItem = useSelector(chosenItemSelector);

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
        // children={() => <ProductDetails product={chosenItem} />}
        component={ProductDetails}
        options={{
          headerTitle: chosenItem?.displayTitle,
        }}
      />
      <Stack.Screen
        name='Bag'
        component={CheckoutStackScreen}
        options={{
          headerTitle: 'Cart',
        }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;
