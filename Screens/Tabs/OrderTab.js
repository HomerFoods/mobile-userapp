import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../Components/OrdersComponents/Header'
import ActiveOrders from '../../Components/OrdersComponents/ActiveOrders';

export default function OrderTab() {
  return (
    <View style={styles.container}>
     <Header/>
     <ScrollView>
      <ActiveOrders/>
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});