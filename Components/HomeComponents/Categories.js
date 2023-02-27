import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import pastries from '../../assets/Icons/Cakes.png'
import shop from '../../assets/Icons/rice.png'
import fastfood from '../../assets/Icons/order.png'
import dessert from '../../assets/Icons/pan.png'

export default function Categories() {
  return (
    <View className="bg-[#FFF] pb-3">
      <View className="items-center justify-start mt-8 mx-2">
        <View className="bg-[#fff7fa] flex-row justify-between items-center p-3 rounded-md w-[98%]">
            <Text style={styles.gilroymedium} className='text-base ml-4'>All African</Text>
            <Image source={shop} className='h-14 w-20'/>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className='space-x-3 ml-2 mt-4'>
      <View className='bg-[#FFEDCD] py-3 flex-row space-x-2 items-center rounded-lg h-48 w-[48%]'>
         <View className='space-y-4 px-3'>
           <View className='bg-white p-1 flex-row space-x-1 items-center rounded-full'>
               <Text style={styles.gilroymedium} className='text-xs'> 🎫 Use the promocode "HOMER"</Text>
           </View>
           <View>
           <Text style={styles.gilroymedium} className='text-sm leading-relaxed text-black'>Get up to 100 TL {"\n"}When you use the {"\n"}promocode</Text>
           </View>
           <View className='bg-black p-1 rounded-full items-center w-[34%]'>
              <Text style={styles.gilroymedium} className='text-xs text-white'>See how</Text>
           </View>
         </View>
         <View>
            <Image source={fastfood} className='h-60 w-36'/>
         </View>
      </View>
      <View className='bg-[#000] py-3 flex-row justify-center items-center rounded-lg h-48 w-96'>
         <View className='space-y-4 px-4'>
           <View className='bg-white p-1 flex-row space-x-2 items-center rounded-full'>
                <Image source={pastries} className='h-4 w-8'/>
               <Text style={styles.gilroymedium} className='text-xs'>Use the promocode "HOMER"</Text>
           </View>
           <View>
           <Text style={styles.gilroymedium} className='text-sm text-white'>Get up to 100 TL {"\n"}When you use the {"\n"}promocode</Text>
           </View>
           <View className='bg-white p-1 rounded-full items-center w-[34%]'>
              <Text style={styles.gilroymedium} className='text-xs text-black'>See how</Text>
           </View>
         </View>
         <View>
            <Image source={dessert} className='h-48 w-36'/>
         </View>
      </View>
      </ScrollView>
       {/* <View className="flex-row space-x-4 items-center justify-center mt-4 mx-3">
      <View className="bg-[#fffbed] items-center p-3 rounded-md w-[30%] h-22 flex space-x-2">
            <Image source={fastfood} className='w-16 h-14'/>
            <Text style={styles.gilroymedium} className='mt-2 text-xs'>Fastfood</Text>
        </View>
        <View className="bg-[#eefffa] items-center p-3 rounded-md w-[30%] h-22 flex space-x-2">
        <Image source={pastries} className='w-16 h-14'/>
        <Text style={styles.gilroymedium} className='mt-2 text-xs'>Pastries</Text>
        </View>
        <View className="bg-[#f6faff] items-center p-3 rounded-md w-[30%] h-22 flex space-x-2">
            <Image source={dessert} className='w-16 h-14'/>
            <Text style={styles.gilroymedium} className='mt-2 text-xs'>See all</Text>
        </View>
      </View>*/}
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
