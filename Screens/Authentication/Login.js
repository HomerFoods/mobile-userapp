import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginHeader from '../../AuthenticationComponents/LoginComponents/LoginHeader'
import LoginInput from '../../AuthenticationComponents/LoginComponents/LoginInputs'
import LoginFooter from '../../AuthenticationComponents/LoginComponents/LoginFooter'

export default function Login() {
  return (
    <View style={styles.container} className='pt-20'>
      <KeyboardAwareScrollView>
        <LoginHeader/>
        <LoginInput/>
        <LoginFooter/>
      </KeyboardAwareScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});