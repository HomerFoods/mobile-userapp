import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, {useRef, useState, useCallback} from 'react'
import icon from '../../assets/icon.png'
import { useNavigation } from "@react-navigation/core";
import MenuOrder from './MenuOrder';

export default function Menu() {
  const navigation = useNavigation();
  return (
    <View>
    <View className='mt-4 mx-4 pb-32'>
      <Pressable onPress={() => navigation.navigate('MenuItem')}>
     <View className='mt-4 flex-row justify-between items-center'>
         <View>
         <Text style={styles.gilroymedium} className='text-base'>Special Fried Rice</Text>
         <Text style={styles.gilroymedium} className='text-[#4e4e4e] mt-1 text-xs'>Spicy Fried Rice and Turkey with coleslaw</Text>
         <Text style={styles.gilroymedium} className='text-[#000] mt-1 text-sm'>140TL</Text>
         </View>
         <Image source={icon} className='h-12 w-12'/>
     </View>
      </Pressable>
      
     <View className='mt-6 flex-row justify-between items-center'>
         <View>
         <Text style={styles.gilroymedium} className='text-base'>Pounded yam</Text>
         <Text style={styles.gilroymedium} className='text-[#4e4e4e] mt-1 text-xs'>Pounded yam and Egusi soup with goat meat</Text>
         <Text style={styles.gilroymedium} className='text-[#000] mt-1 text-sm'>170TL</Text>
         </View>
         <Image source={icon} className='h-12 w-12'/>
     </View>
     <View className='mt-6 flex-row justify-between items-center'>
         <View>
         <Text style={styles.gilroymedium} className='text-base'>Beans</Text>
         <Text style={styles.gilroymedium} className='text-[#4e4e4e] mt-1 text-xs'>Beans and plantain</Text>
         <Text style={styles.gilroymedium} className='text-[#000] mt-1 text-sm'>70TL</Text>
         </View>
         <Image source={icon} className='h-12 w-12'/>
     </View>
     <View className='mt-6 flex-row justify-between items-center'>
         <View>
         <Text style={styles.gilroymedium} className='text-base'>Yam</Text>
         <Text style={styles.gilroymedium} className='text-[#4e4e4e] mt-1 text-xs'>Yam and egg sauce</Text>
         <Text style={styles.gilroymedium} className='text-[#000] mt-1 text-sm'>170TL</Text>
         </View>
         <Image source={icon} className='h-12 w-12'/>
     </View>
     <View className='mt-6 flex-row justify-between items-center'>
         <View>
         <Text style={styles.gilroymedium} className='text-base'>Semovita</Text>
         <Text style={styles.gilroymedium} className='text-[#4e4e4e] mt-1 text-xs'>Semovita and Egusi soup with goat meat</Text>
         <Text style={styles.gilroymedium} className='text-[#000] mt-1 text-sm'>230TL</Text>
         </View>
         <Image source={icon} className='h-12 w-12'/>
     </View>
     <View className='mt-6 flex-row justify-between items-center'>
         <View>
         <Text style={styles.gilroymedium} className='text-base'>Rice and stew</Text>
         <Text style={styles.gilroymedium} className='text-[#4e4e4e] mt-1 text-xs'>Rice and stew</Text>
         <Text style={styles.gilroymedium} className='text-[#000] mt-1 text-sm'>120TL</Text>
         </View>
         <Image source={icon} className='h-12 w-12'/>
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
    box: {
      alignSelf: "flex-start",
    },
  });