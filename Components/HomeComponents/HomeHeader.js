import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import delivery from "../../assets/Icons/Packagedelivered.png";
import bag from "../../assets/Icons/Bag.png";
import { IconTruckDelivery, IconWalk, IconBuildingStore, IconMapPin } from "tabler-icons-react-native";

export default function HomeHeader() {
  return (
    <View>
      <SafeAreaView style={styles.appbar}>
        <View className="p-2 pl-4 flex-row justify-between">
          <View className='flex-row space-x-3 items-center'>
             <IconMapPin color="#FFC727"/>
            <View>
              <Text style={styles.gilroymedium} className='text-[#636363] text-xs'>Select location</Text>
              <Text style={styles.gilroymedium} className='text-[#0E0E0E] text-xs'>44 street, kaymaka..</Text>
            </View>
          </View>
          <View className='flex-row space-x-2 items-center mr-2'>
            <View className='flex-row space-x-2 items-center bg-[#fffce3] rounded-full px-2 py-1'>
                <View className='bg-[#ffda73] rounded-full p-2 items-center'>
                   <IconTruckDelivery color="white" size={18}/>
                </View>
                <View className='bg-[#fffbdb] rounded-full p-2 items-center'>
                   <IconWalk color="black" size={18}/>
                </View>
                <View className='bg-[#fffbdb] rounded-full p-2 items-center'>
                   <IconBuildingStore color="black" size={18}/>
                </View>
            </View>
            {/*  
            <View className='relative'>
            <IconShoppingBag className="w-7 h-7 absolute" />
            <View className='bg-[#FFC727] py-1 px-2 rounded-full top-0 ml-4'>
              <Text className='text-xs text-white'>1</Text>
            </View>
            </View>
            */}
            {/*
            <IconBell size={27}/>
            */}
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    appbar: {
      backgroundColor: "#Fff",
    },
    gilroymedium: {
      fontFamily: "GilroyMedium",
    },
    gilroysemibold: {
      fontFamily: "GilroySemiBold",
    },
  });