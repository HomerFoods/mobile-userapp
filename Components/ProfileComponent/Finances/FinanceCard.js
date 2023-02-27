import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { IconCreditCard, IconWallet, IconArrowRight } from "tabler-icons-react-native";


export default function FinanceCard() {
  return (
    <View className='mt-2'>
        <View className='bg-[#FBFBFB] p-4'>

      <Text style={styles.gilroysemibold} className='text-base'>Finances</Text>
        </View>

      <View className='mt-0 bg-[#fff] p-2 rounded-md mx-4'>
      <View className="flex-row justify-between mt-4 items-center">
        <View className="space-x-3 flex-row items-center">
          <View className="bg-[#F9F9F9] p-2 rounded-full">
            <IconWallet size={20} color="#FFC727" />
          </View>
          <Text style={styles.gilroymedium} className='text-sm'>Wallet</Text>
        </View>
        <IconArrowRight size={20} color="#000" />
        </View>

        <View className="h-[0.5] mt-5 ml-10 w-[90%] mr-6 bg-[#EEE]"></View>

        <View className="flex-row justify-between mt-4 items-center">
          <View className="space-x-3 flex-row items-center">
            <View className="bg-[#F9F9F9] p-2 rounded-full">
              <IconCreditCard size={20} color="#FFC727" />
            </View>
            <Text style={styles.gilroymedium} className='text-sm'>Cards & Other Payment Methods</Text>
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