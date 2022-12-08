import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CartHeader from './CartHeader'
import CartItems from './CartItems'

export default function IndexCart() {
  return (
    <View style={styles.container}>
    <CartHeader/>
    <ScrollView>
        <CartItems/>
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