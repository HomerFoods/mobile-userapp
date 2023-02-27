import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import pastries from "../../assets/Icons/pastries.png";
import shop from "../../assets/Icons/shop.png";
import fastfood from "../../assets/Icons/fastfoodset.png";
import { IconDots } from "tabler-icons-react-native";

export default function NewCategory() {
  return (
    <View className="bg-[#FFF] pb-3">
      <View className=" items-center mx-4 mt-4">
        <View className="bg-[#f4f4f4] h-20 w-[100%] flex-row justify-between rounded-lg">
          <View className="p-4">
            <Text style={styles.gilroymedium} className="text-base">
              Restaurants
            </Text>
            <Text style={styles.gilroymedium} className="text-xs">
              Order food you love
            </Text>
          </View>
          <View className="p-2 bg-[#f4f4f4] items-center justify-center w-[30%] ">
            <Image source={shop} className="h-12 w-12" />
          </View>
        </View>
        <View className="w-[64%] flex-row space-x-3 mt-2 justify-center">
          <View className='w-[48%]'>
          <View className="bg-[#f4f4f4] h-20 space-y-4 items-center justify-center rounded-lg p-4">
            <Image source={fastfood} className="h-10 w-8" />
          </View>
              <Text style={styles.gilroymedium} className='text-xs text-center mt-3'>Fastfood</Text>
          </View>
          <View className='w-[48%]'>
          <View className="bg-[#f4f4f4] h-20 space-y-4 items-center justify-center rounded-lg">
            <Image source={pastries} className="h-8 w-10" />
          </View>
              <Text style={styles.gilroymedium} className='text-xs text-center mt-3'>Pastries</Text>
          </View>
          <View className='w-[48%]'>
          <View className="bg-[#f4f4f4] h-20 space-y-4 items-center justify-center rounded-lg">
            <IconDots className="h-8 w-10" />
          </View>
              <Text style={styles.gilroymedium} className='text-xs text-center mt-3'>See more</Text>
          </View>
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
