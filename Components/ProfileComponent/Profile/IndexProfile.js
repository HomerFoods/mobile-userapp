import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Index() {
  return (
    <View className="px-4 pt-8 bg-[#ffffff] pb-9">
      <View className="flex-row justify-between items-center">
        <View className='flex-row space-x-3 items-center'>
          <View>
          <Text style={styles.gilroysemibold} className='text-xl'>Adetemi Adelowo Lucid</Text>
          <View style={styles.box} className='bg-[#fff] p-2 rounded-lg items-center border-[#767676] border mt-2'>
           <Text className='text-black' style={styles.gilroysemibold}>Edit Profile</Text>
        </View>
          </View>
        </View>
        <View className='bg-[#FFC727] p-4 rounded-lg items-center'>
           <Text className='text-white text-xl' style={styles.gilroybold}>AO</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "#FBFBFB",
  },
  gilroymedium: {
    fontFamily: "GilroyMedium",
  },
  box: {
    alignSelf: "flex-start",
  },
  gilroysemibold: {
    fontFamily: "GilroySemiBold",
  },
  gilroybold: {
    fontFamily: "GilroyBold",
  },
});
