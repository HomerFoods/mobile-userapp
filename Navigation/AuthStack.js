import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/Onboarding/UseSplashScreen'
import GeneralStack from "./GeneralStack";
import Register from '../Screens/Authentication/Register'
import Login from "../Screens/Authentication/Login";
import ForgotPassword from "../Screens/Authentication/ForgotPassword";

export default function AuthStack() {
    const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator mode="modal">
       <Stack.Screen name="SplashScreen" component={SplashScreen} options={{title: 'SplashScreen', headerShown: false, headerBackTitleVisible: false, }}/>
       
       <Stack.Screen name="Home" component={GeneralStack}  options={{title: 'Home', headerShown: false}} />

       <Stack.Screen name="Register" component={Register}  options={{title: 'Register', headerShown: false}} />

       <Stack.Screen name="ForgotPass" component={ForgotPassword}  options={{title: 'Forgot Password', headerShown: false}} />

       <Stack.Screen name="Login" component={Login}  options={{title: 'Login', headerShown: false}} />

   </Stack.Navigator>
  )
}