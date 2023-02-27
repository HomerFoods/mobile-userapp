import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../Navigation/TabNavigator'
import RestaurantDetails from "../Screens/Restaurants/RestaurantDetails";
import RestaurantMenu from "../Screens/Restaurants/RestaurantMenu";
import HomeTab from "../Screens/Tabs/HomeTab";

export default function HomeStack() {
    const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator mode="modal">
       <Stack.Screen name="HomeScreen" component={HomeTab}  options={{title: 'HomeScreen', headerShown: false}} />
       <Stack.Screen name="RestaurantMenu" component={RestaurantMenu}  options={{title: 'RestaurantMenu', headerShown: false, gestureDirection: 'vertical'}} />
       <Stack.Screen name="RestaurantDetails" component={RestaurantDetails}  options={{title: 'RestaurantDetails', headerShown: false, gestureDirection: 'vertical'}} />
   </Stack.Navigator>
  )
}