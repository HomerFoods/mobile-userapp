import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import fastfood from '../../assets/icon.png'

export default function Categories() {
  return (
    <View className='bg-[#FBFBFB] pl-4 pb-4 pt-4'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className='bg-[#FFFADF] p-3 flex-row space-x-4 rounded-lg items-center mr-4' style={styles.box}>
        <Text style={styles.gilroysemibold}>FastFood</Text>
        <Image source={fastfood} className='w-8 h-8'/>
      </View>
      <View className='bg-[#FFFBEF] p-3 flex-row space-x-4 rounded-lg items-center mr-4' style={styles.box}>
        <Text style={styles.gilroysemibold}>Breakfast</Text>
        <Image source={fastfood} className='w-8 h-8'/>
      </View>
      <View className='bg-[#F2FFEE] p-3 flex-row space-x-4 rounded-lg items-center mr-4' style={styles.box}>
        <Text style={styles.gilroysemibold}>Lunch</Text>
        <Image source={fastfood} className='w-8 h-8'/>
      </View>
      <View className='bg-[#FFFADF] p-3 flex-row space-x-4 rounded-lg items-center mr-4' style={styles.box}>
        <Text style={styles.gilroysemibold}>Pastries</Text>
        <Image source={fastfood} className='w-8 h-8'/>
      </View>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-4'>
      <View className='bg-[#FFF7F2] p-3 flex-row space-x-4 rounded-lg items-center mr-4' style={styles.box}>
        <Text style={styles.gilroysemibold}>Soup</Text>
        <Image source={fastfood} className='w-8 h-8'/>
      </View>
      <View className='bg-[#eef8ff] p-3 flex-row space-x-4 rounded-lg items-center mr-4' style={styles.box}>
        <Text style={styles.gilroysemibold}>Chicken</Text>
        <Image source={fastfood} className='w-8 h-8'/>
      </View>
      <View className='bg-[#FFFADF] p-3 flex-row space-x-4 rounded-lg items-center mr-4' style={styles.box}>
        <Text style={styles.gilroysemibold}>Pizza</Text>
        <Image source={fastfood} className='w-8 h-8'/>
      </View>
      <View className='bg-[#ffdcc7] p-3 flex-row space-x-4 rounded-lg items-center mr-4' style={styles.box}>
        <Text style={styles.gilroysemibold} className='text-xssm'>BBQ</Text>
        <Image source={fastfood} className='w-8 h-8'/>
      </View>
        </ScrollView>
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
    box: {
        alignSelf: "flex-start",
      },
  });