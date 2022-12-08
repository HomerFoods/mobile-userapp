import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../../AuthenticationComponents/RegisterComponents/Header";
import RegisterInputs from "../../AuthenticationComponents/RegisterComponents/RegisterInputs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Footer from "../../AuthenticationComponents/RegisterComponents/Footer";

export default function Register() {
  return (
    <View style={styles.container} className='pt-20'>
      <KeyboardAwareScrollView>
        <Header />
        <RegisterInputs/>
        <Footer/>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
