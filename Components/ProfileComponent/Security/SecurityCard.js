import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {  IconLock, IconArrowRight } from "tabler-icons-react-native";


export default function SecurityCard() {
  return (
    <View className='mt-4'>
        <View className='bg-[#FBFBFB] p-4'>

      <Text style={styles.gilroysemibold} className='text-base'>SECURITY</Text>
        </View>

      <View className='mt-4 bg-[#fff] p-3 rounded-md mx-4'>
        <View className='flex-row justify-between items-center'>
        <View className='space-x-3 flex-row items-center'>
          <View className='bg-[#F9F9F9] p-2 rounded-full'>
            <IconLock size={20} color='#FFC727'/>
          </View>
            <Text style={styles.gilroymedium} className='text-black'>Change Password</Text>
        </View>
        <IconArrowRight size={20} color="#000" />
        </View>
      </View>
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