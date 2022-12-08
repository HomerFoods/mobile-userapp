import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import user from '../../assets/Images/user.png'

export default function IndividualChat() {
  return (
    <View>
      <View className='flex-row justify-between items-center p-1 mt-4'>
          <View className='flex-row space-x-4 items-center'>
              <Image source={user} className='w-10 h-10'/>
              <View>
              <Text style={styles.gilroysemibold}>WAZOBIA RESTAURANT</Text>
              <Text style={styles.gilroymedium} className='mt-1 text-[#767676]'>Thank you for your Order</Text>
              </View>
          </View>
          <View className='items-end flex'>
             <Text className='text-[#FFCC17]' style={styles.gilroymedium}>
             11:02
             </Text>
             <View className='h-5 w-5 rounded-full justify-center items-center mt-2 bg-[#FFCC17]'>
             <Text className='text-[#fff]' style={styles.gilroymedium}>
             1
             </Text>
             </View>
          </View>
      </View>
      <View className='flex-row justify-between items-center p-1 mt-8'>
          <View className='flex-row space-x-4 items-center'>
              <Image source={user} className='w-10 h-10'/>
              <View>
              <Text style={styles.gilroysemibold}>MOZARELLA PIZZA AND BURGER</Text>
              <Text style={styles.gilroymedium} className='mt-1 text-[#767676]'>Thank you</Text>
              </View>
          </View>
          <View className='items-end flex'>
             <Text className='text-[#FFCC17]' style={styles.gilroymedium}>
             9:02
             </Text>
             <View className='h-5 w-5 rounded-full justify-center items-center mt-2 bg-[#FFCC17]'>
             <Text className='text-[#fff]' style={styles.gilroymedium}>
             2
             </Text>
             </View>
          </View>
      </View>
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