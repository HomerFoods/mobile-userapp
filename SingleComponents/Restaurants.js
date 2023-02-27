import { View, Text, ScrollView, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import pasta from "../assets/Images/pasta.png";
import toast from "../assets/Images/jolllofrice.jpg";
import reign from "../assets/Images/restaurant.jpg";
import { IconStar, IconHeart, IconBike } from "tabler-icons-react-native";
import { useNavigation } from "@react-navigation/core";

export default function Restaurants() {
  const navigation = useNavigation();
  return (
    <View className="">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="w-80 mr-6">
          <View className="rounded-lg w-80 h-36 relative">
            <Image
              source={reign}
              className=" w-80 h-36 rounded-lg absolute"
            ></Image>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Text style={styles.gilroysemibold} className='text-black'>Reign Restaurant</Text>
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
        <View className="w-80 mr-6">
          <View className="rounded-lg w-80 h-36 relative">
            <Image
              source={pasta}
              className=" w-80 h-36 rounded-lg absolute"
            ></Image>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Text style={styles.gilroysemibold} className='text-black'>Afrozid Restaurant</Text>
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
        <View className="w-80 mr-6">
          <View className="rounded-lg w-80 h-36 relative">
            <Pressable onPress={() => navigation.navigate("RestaurantMenu")}>
            <Image
              source={toast}
              className=" w-80 h-36 rounded-lg absolute"
            ></Image>
            </Pressable>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Pressable  onPress={() => navigation.navigate("RestaurantMenu")}>
            <Text style={styles.gilroysemibold}>Wazobia Restaurant</Text>
            </Pressable>
            <IconHeart color="#848484" size={20} />
          </View>
          <View className="flex-row space-x-3 items-center justify-between mt-1">
            <View className="flex-row items-center space-x-1">
              <IconBike color="#848484" size={14} />
              <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
               | ₺60  Delivery fee |
              </Text>
            <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
            20 - 25 min  |
            </Text>
            <Text style={styles.gilroymedium} className="text-[#bb5a49] text-xs">
            Closed
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
