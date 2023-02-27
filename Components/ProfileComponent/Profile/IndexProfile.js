import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

export default function Index() {
  const navigation = useNavigation();
  return (
    <View className="px-4 pt-8 bg-[#FFF8E4] pb-9">
      <View className="items-center">
      <View className='bg-[#FFC727] p-4 rounded-lg items-center'>
           <Text className='text-white text-3xl' style={styles.gilroybold}>AO</Text>
        </View>
        <View className='justify-center items-center mt-4 flex text-center'>
          <Text style={styles.gilroysemibold} className='text-base'>Adetemi Adelowo Lucid</Text>
          <Pressable onPress={() => navigation.navigate("EditAccount")}>
          <View className='bg-[#fff] p-2 rounded-lg items-center border-[#767676] border mt-2'>
           <Text className='text-black text-xs' style={styles.gilroysemibold}>Edit Profile</Text>
        </View>
          </Pressable>
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
