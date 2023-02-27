import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginHeader from '../../AuthenticationComponents/LoginComponents/LoginHeader'
import LoginInput from '../../AuthenticationComponents/LoginComponents/LoginInputs'
import LoginFooter from '../../AuthenticationComponents/LoginComponents/LoginFooter'
import { StatusBar } from "expo-status-bar";

export default function Login() {
  return (
    <View style={styles.container} className='pt-10'>
    <View className='pt-10'>
      <KeyboardAwareScrollView>
        <LoginHeader/>
        <LoginInput/>
        <LoginFooter/>
      </KeyboardAwareScrollView>
      </View>
      <StatusBar style="dark"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});