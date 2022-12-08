import { View, Text, StyleSheet, SafeAreaView, Image, Pressable } from "react-native";
import React from "react";
import bag from "../../assets/Icons/Bag.png";
import { useNavigation } from "@react-navigation/core";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View className='bg-[#FBFBFB]'>
      <SafeAreaView>
        <View className="p-4 flex-row justify-between items-center">
          <Text style={styles.gilroysemibold} className="text-xl">
            Orders
          </Text>
          <Pressable  onPress={() => navigation.navigate("Carts")}>
          <View className='relative'>
            <Image source={bag} className="w-7 h-7 absolute" />
            <View className='bg-[#FFC727] py-1 px-2 rounded-full top-0 ml-4'>
              <Text className='text-xs text-white'>1</Text>
            </View>
            </View>
          </Pressable>
        </View>
        <View className='flex-row space-x-4 items-center p-4 mt-4 justify-center'>
           <Pressable className='bg-black rounded-md p-4 w-[45%] flex-row justify-center'>
             <Text style={styles.gilroymedium} className='text-white'>Active Orders</Text>
           </Pressable>
           <Pressable className='bg-[#eee] rounded-md p-4 w-[45%] flex-row justify-center'>
             <Text style={styles.gilroymedium} className='text-[#bdbdbd]'>Completed Orders</Text>
           </Pressable>
        </View>
      </SafeAreaView>
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
