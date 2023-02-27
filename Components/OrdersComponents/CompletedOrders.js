import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import bag from "../../assets/Icons/Bag.png";
import { IconArrowRight, IconCheck } from "tabler-icons-react-native";

export default function CompletedOrders() {
  return (
    <View className="mx-6 mt-8">
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-3 items-center">
          <View className='bg-[#FFF5DA] rounded-full p-2 items-center justify-center'>
          <IconCheck/>
          </View>
          <View>
            <Text style={styles.gilroysemibold} className="text-sm">
              Fried Rice and Turkey
            </Text>
            <Text style={styles.gilroymedium} className="text-[#64BD68] mt-2">
              Order Again
            </Text>
          </View>
        </View>
        <IconArrowRight size={20} color="#000" />
      </View>
      <View className="h-[0.5] mt-5 ml-2 mb-5 w-[95%] mr-2 bg-[#EEE]"></View>
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-3 items-center">
          <View className='bg-[#FFF5DA] rounded-full p-2 items-center justify-center'>
          <IconCheck/>
          </View>
          <View>
            <Text style={styles.gilroysemibold} className="text-sm">
              Pounded yam and Egusi
            </Text>
            <Text style={styles.gilroymedium} className="text-[#64BD68] mt-2">
              Order Again
            </Text>
          </View>
        </View>
        <IconArrowRight size={20} color="#000" />
      </View>
      <View className="h-[0.5] mt-5 ml-2 mb-5 w-[95%] mr-2 bg-[#EEE]"></View>
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-3 items-center">
          <View className='bg-[#FFF5DA] rounded-full p-2 items-center justify-center'>
          <IconCheck/>
          </View>
          <View>
            <Text style={styles.gilroysemibold} className="text-sm">
              Shawarma and Chips
            </Text>
            <Text style={styles.gilroymedium} className="text-[#64BD68] mt-2">
              Order Again
            </Text>
          </View>
        </View>
        <IconArrowRight size={20} color="#000" />
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
