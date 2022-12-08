import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../Navigation/TabNavigator'
import IndexCart from "../Components/OrdersComponents/Cart/IndexCart";
import Checkout from "../Screens/GeneralScreens/Checkout";

export default function GeneralStack() {
    const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator mode="modal">
       <Stack.Screen name="Tabs" component={TabNavigator}  options={{title: 'Home', headerShown: false}} />
       <Stack.Screen name="Carts" component={IndexCart}  options={{title: 'Carts', headerShown: false, gestureDirection: 'vertical'}} />
       <Stack.Screen name="Checkout" component={Checkout}  options={{title: 'Checkout', headerShown: false, gestureDirection: 'vertical'}} />
   </Stack.Navigator>
  )
}