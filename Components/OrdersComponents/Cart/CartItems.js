import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import bag from "../../../assets/Icons/Bag.png";
import { IconArrowRight } from "tabler-icons-react-native";
import { useNavigation } from "@react-navigation/core";

export default function CartItems() {
  const navigation = useNavigation();
  return (
    <View className="mx-6 mt-16" style={styles.bg}>
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-3 items-center">
        
          <View>
            <Text style={styles.gilroysemibold} className="text-sm">
              AFROZIDIAC RESTAURANT
            </Text>
            <Text style={styles.gilroymedium} className="text-[#858585] mt-2">
              8th December, 11.05
            </Text>
          </View>
        </View>
        <IconArrowRight size={20} color="#000" />
      </View>
      <View className="h-[0.5] mt-5 ml-2 w-[95%] mr-2 bg-[#EEE]"></View>

      <Pressable className='bg-[#FFCC00] p-4 items-center rounded-md mt-20' style={styles.bottom} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.gilroymedium} className='text-white text-base'>Proceed to checkout</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#FEFEFF",
    flex: 1,
  },
  gilroymedium: {
    fontFamily: "GilroyMedium",
  },
  gilroysemibold: {
    fontFamily: "GilroySemiBold",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    marginBottom: 4,
  },
});
