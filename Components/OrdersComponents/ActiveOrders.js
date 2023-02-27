import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import bag from "../../assets/Icons/Bag.png";
import { IconArrowRight } from "tabler-icons-react-native";

export default function ActiveOrders() {
  return (
    <View className="mx-6 mt-8">
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-3 items-center">
          <View className='bg-[#FFF5DA] rounded-full p-2 items-center justify-center'>
          <Image source={bag} className="w-7 h-7" />
          </View>
          <View>
            <Text style={styles.gilroysemibold} className="text-sm">
              Jollof Rice, Salad and Peppered Turkey
            </Text>
            <Text style={styles.gilroymedium} className="text-[#64BD68] mt-2">
              Processing Order
            </Text>
          </View>
        </View>
        <IconArrowRight size={20} color="#000" />
      </View>
      <View className="h-[0.5] mt-5 ml-2 w-[95%] mr-2 bg-[#EEE]"></View>
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
