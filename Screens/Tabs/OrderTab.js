import { View, StyleSheet, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import Header from "../../Components/OrdersComponents/Header";
import ActiveOrders from "../../Components/OrdersComponents/ActiveOrders";
import BodyOrders from "../../Components/OrdersComponents/BodyOrders";

export default function OrderTab() {
  const [selected, setisselected] = useState(0);

  const chooseselected = (selected) => {
    setisselected(selected);
  };

  return (
    <View style={styles.container}>
      <Header chooseselected={chooseselected} selected={selected} />
      <ScrollView>
         <BodyOrders selected={selected}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
