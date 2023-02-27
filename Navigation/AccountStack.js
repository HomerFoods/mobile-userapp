import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileTab from "../Screens/Tabs/ProfileTab";
import EditProfile from "../Components/ProfileComponent/Profile/EditProfile";

export default function AccountStack() {
    const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator mode="modal">
       <Stack.Screen name="AccountTab" component={ProfileTab}  options={{title: 'ProfileTab', headerShown: false}} />
       <Stack.Screen name="EditAccount" component={EditProfile}  options={{title: 'EditProfile', headerShown: false, gestureDirection: 'vertical'}} />
   </Stack.Navigator>
  )
}