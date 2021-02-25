import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Signup from "./Signup";
import Login from './Login';
import Menu from "./Menu";
import Cart from "./Cart";
import Checkout from "./Checkout";
import SubmitOrder from "./SubmitOrder";
import Receipt from './Receipt';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: true }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: true }} />
          <Stack.Screen name="Cart" component={Cart} options={{ headerShown: true }} />
          <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: true  }} />
          <Stack.Screen name="SubmitOrder" component={SubmitOrder} options={{ headerShown: true  }} />
          <Stack.Screen name="Receipt" component={Receipt} options={{ headerShown: true  }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
