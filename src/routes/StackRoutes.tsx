import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../screens/ProductDetails';
import { clothes } from '../static/products';
import Routes from './Routes';

const Stack = createStackNavigator();

function StackRoutes() {
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
        children={() => <ProductDetails product={clothes[1]} />}
        options={{
          headerTitle: clothes[1].title,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;
