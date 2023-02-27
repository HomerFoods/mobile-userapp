import { View, Text, StyleSheet, SafeAreaView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import bag from "../../assets/Icons/Bag.png";
import { useNavigation } from "@react-navigation/core";

const Header = ({ chooseselected, selected }) => {
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
           <Pressable className={`${selected == 0 ? 'bg-black ease-in-out': 'bg-[#eee]'} rounded-md p-4 w-[50%] flex-row justify-center ease-in-out`} onPress={()=>chooseselected(0)}>
             <Text style={styles.gilroymedium} className={`${selected < 1 ? 'text-white': 'text-[#bdbdbd]'}`}>Active Orders</Text>
           </Pressable>
           <Pressable className={`${selected == 2 ? 'bg-black ease-in-out duration-75' : 'bg-[#eee]'} rounded-md p-4 w-[50%] flex-row justify-center`} onPress={()=>chooseselected(2)}>
             <Text style={styles.gilroymedium} className={`${selected == 2 ? 'text-white': 'text-[#bdbdbd]'}`}>Completed Orders</Text>
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

export default Header;
