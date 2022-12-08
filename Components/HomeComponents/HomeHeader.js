import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import delivery from "../../assets/Icons/Packagedelivered.png";
import bag from "../../assets/Icons/Bag.png";
import { IconBell, IconNotification } from "tabler-icons-react-native";

export default function HomeHeader() {
  return (
    <View>
      <SafeAreaView style={styles.appbar}>
        <View className="p-2 pl-4 flex-row justify-between">
          <View className='flex-row space-x-3 items-center'>
            <Image source={delivery} className="w-8 h-6" />
            <View>
              <Text style={styles.gilroysemibold} className='text-[#0E0E0E] text-sm text'>Deliver now</Text>
              <Text style={styles.gilroymedium} className='text-[#3A3A3A] text-xs'>44 street, kaymakali, lefkosia</Text>
            </View>
          </View>
          <View className='flex-row space-x-2 items-center mr-2'>
            <View className='relative'>
            <Image source={bag} className="w-7 h-7 absolute" />
            <View className='bg-[#FFC727] py-1 px-2 rounded-full top-0 ml-4'>
              <Text className='text-xs text-white'>1</Text>
            </View>
            </View>
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
      backgroundColor: "#FBFBFB",
    },
    gilroymedium: {
      fontFamily: "GilroyMedium",
    },
    gilroysemibold: {
      fontFamily: "GilroySemiBold",
    },
  });