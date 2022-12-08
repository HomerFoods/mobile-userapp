import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import smiley from "../../../assets/Icons/favourites.png";

export default function FavouritesCard() {
  return (
    <View className='mt-6 mx-4'>
      <View className="bg-[#FFFADF] flex-row justify-between items-center p-3 rounded-md w-[98%]">
        <Text style={styles.gilroysemibold} className="text-base ml-4">
          Your Favourites
        </Text>
        <Image source={smiley} className="h-10 w-10" />
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
