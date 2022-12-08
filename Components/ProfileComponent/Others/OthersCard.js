import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { IconBell, IconLogout, IconQuestionMark, IconShieldCheck, IconUser, IconUserCircle } from "tabler-icons-react-native";


export default function OthersCard() {
  return (
    <View className='mt-8 items-center justify-center pb-28'>
        <View className=' p-4 flex-row space-x-2 items-center'>
      <Text style={styles.gilroymedium} className='text-red-600'>Logout</Text>
      <IconLogout size={20} color='#ff0000'/>
        </View>
        <Text style={styles.gilroymedium} className='mt-3 mb-4'>HomerFoods v1.0.0.1</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    appbar: {
      backgroundColor: "#FBFBFB",
    },
    gilroymedium: {
      fontFamily: "GilroyMedium",
    },
    gilroysemibold: {
      fontFamily: "GilroySemiBold",
    },
  });