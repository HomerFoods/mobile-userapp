import { View, Text, ScrollView, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import pasta from "../assets/Images/swallow.jpg";
import toast from "../assets/Images/whiterice.jpg";
import { IconStar, IconHeart, IconBike } from "tabler-icons-react-native";
import { useNavigation } from "@react-navigation/core";

export default function Madeforyous() {
  const navigation = useNavigation();
  return (
    <View className="">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="w-80 mr-6">
          <View className="rounded-lg w-80 h-36 relative">
            <Image
              source={pasta}
              className=" w-80 h-36 rounded-lg absolute"
            ></Image>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Text style={styles.gilroysemibold} className='text-black'>Pounded yam and Egusi soup</Text>
            <IconHeart color="#848484" size={20} />
          </View>
          <View className="flex-row space-x-3 items-center justify-between mt-1">
            <View className="flex-row items-center space-x-1">
              <IconBike color="#848484" size={14} />
              <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
               | ₺20  Delivery fee |
              </Text>
            <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
            10 - 15 min  |
            </Text>
            <Text style={styles.gilroymedium} className="text-[#49bb4d] text-xs">
            Open
            </Text>
            </View>
            <View className='flex-row space-x-1 items-center'>
              <IconStar size={12} color="#FFC727" fill="#FFC727"/>
              <Text style={styles.gilroysemibold} className="text-xs">
                {" "}
                5.0 (34)
              </Text>
            </View>
          </View>
        </View>
        <View className="w-80 mr-6">
          <View className="rounded-lg w-80 h-36 relative">
            <Image
              source={toast}
              className=" w-80 h-36 rounded-lg absolute"
            ></Image>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Text style={styles.gilroysemibold} className='text-black'>White rice and stew</Text>
            <IconHeart color="#848484" size={20} />
          </View>
          <View className="flex-row space-x-3 items-center justify-between mt-1">
            <View className="flex-row items-center space-x-1">
              <IconBike color="#848484" size={14} />
              <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
               | ₺0  Delivery fee |
              </Text>
            <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
            10 - 15 min  |
            </Text>
            <Text style={styles.gilroymedium} className="text-[#49bb4d] text-xs">
            Open
            </Text>
            </View>
            <View className='flex-row space-x-1 items-center'>
              <IconStar size={12} color="#FFC727" fill="#FFC727"/>
              <Text style={styles.gilroysemibold} className="text-xs">
                {" "}
                4.5 (34)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  box: {
    alignSelf: "flex-start",
  },
});
