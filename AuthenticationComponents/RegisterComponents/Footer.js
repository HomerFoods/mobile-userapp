import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View className='mt-10 mx-6'>
     <Pressable className='bg-[#FFC727] p-4 items-center justify-center rounded-md'>
       <Text style={styles.gilroysemibold} className='text-white'>
        Create your account
       </Text>
     </Pressable>
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