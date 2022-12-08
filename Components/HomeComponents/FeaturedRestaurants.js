import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Restaurants from '../../SingleComponents/Restaurants';

export default function FeaturedRestaurants() {
  return (
    <View className="mt-6 ml-4 pb-2">
      <Text style={styles.gilroysemibold} className="text-lg mb-4">Featured Restaurants</Text>
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