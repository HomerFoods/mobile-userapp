import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Restaurants from '../../SingleComponents/Madeforyous';

export default function MadeForYou() {
  return (
    <View className="mt-2 ml-4 pb-2">
      <Text style={styles.gilroysemibold} className="text-lg mb-0 text-[#3e3e3e]">Specials for you 💛</Text>
      <Text style={styles.gilroymedium} className="text-sm mb-4 text-[#3e3e3e]">Handpicked just for you</Text>
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