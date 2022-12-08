import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CheckoutBody from "../../Components/OrdersComponents/Checkout/CheckoutBody";
import CheckoutHeader from "../../Components/OrdersComponents/Checkout/CheckoutHeader";

export default function Checkout() {
  return (
    <View style={styles.container}>
      <CheckoutHeader />
        <CheckoutBody />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
