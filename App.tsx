import 'react-native-gesture-handler';
// import './src/config/debug.ts';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import StackRoutes from './src/routes/StackRoutes';
import store, { persistor } from './src/store/';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
