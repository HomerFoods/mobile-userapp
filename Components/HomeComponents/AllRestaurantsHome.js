import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Restaurants from '../../SingleComponents/AllRestaurants';

export default function AllRestaurantsHome() {
  return (
    <View className="mt-6 ml-4 pb-36">
      <Text style={styles.gilroysemibold} className="text-lg mb-4">All Restaurants</Text>
      <Restaurants/>
    </View>
  )
}

const styles = StyleSheet.create({
    gilroymedium: {
      fontFamily: "GilroyMedium",
    },
    gilroysemibold: {
      fontFamily: "GilroySemiBold",
    },
  });