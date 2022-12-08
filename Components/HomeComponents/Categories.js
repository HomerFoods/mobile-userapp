import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import pastries from '../../assets/icon.png'
import shop from '../../assets/icon.png'
import fastfoodset from '../../assets/icon.png'
import dessert from '../../assets/icon.png'

export default function Categories() {
  return (
    <View className="bg-[#FBFBFB] pb-3">
      <View className="items-center justify-start mt-8 mx-2">
        <View className="bg-[#fffbe3] flex-row justify-between items-center p-3 rounded-md w-[98%]">
            <Text style={styles.gilroymedium} className='text-base ml-4'>Restaurants</Text>
            <Image source={shop} className='h-14 w-12'/>
        </View>
      </View>
      <View className="flex-row space-x-4 items-center justify-center mt-4 mx-3">
      <View className="bg-[#fff1dc] items-center p-3 rounded-md w-[30%] h-20">
            <Image source={fastfoodset} className='w-8 h-8'/>
            <Text style={styles.gilroymedium} className='mt-2 text-sm'>Fastfood</Text>
        </View>
        <View className="bg-[#e6ffed] items-center p-3 rounded-md w-[30%] h-20">
        <Image source={dessert} className='w-8 h-8'/>
        <Text style={styles.gilroymedium} className='mt-2 text-sm'>Pastries</Text>
        </View>
        <View className="bg-[#edf8ff] items-center p-3 rounded-md w-[30%] h-20">
            <Image source={pastries} className='w-8 h-8'/>
            <Text style={styles.gilroymedium} className='mt-2 text-sm'>More</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gilroymedium: {
    fontFamily: "GilroyMedium",
  },
  gilroysemibold: {
    fontFamily: "GilroySemiBold",
  },
});
