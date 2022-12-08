import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import pasta from "../assets/Images/pasta.png";
import toast from "../assets/Images/chickenwrap.png";
import { IconStar, IconHeart, IconBike } from "tabler-icons-react-native";

export default function Restaurants() {
  return (
    <View className="">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="w-72 mr-6">
          <View className="rounded-lg w-72 h-36 relative">
            <Image
              source={pasta}
              className=" w-72 h-36 rounded-lg absolute"
            ></Image>
            <View
              style={styles.box}
              className="bg-white p-2 mx-4 mt-4 border-r-2 border-b-2 rounded-lg flex-row space-x-1 items-center"
            >
              <IconStar size={12} color="#FFC727" />
              <Text style={styles.gilroysemibold} className="text-xs">
                {" "}
                4.5(34)
              </Text>
            </View>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Text style={styles.gilroymedium}>WAZOBIA RESTAURANT</Text>
            <IconHeart color="#848484" size={20} />
          </View>
          <View className="flex-row space-x-3 items-center mt-1">
            <View className="flex-row items-center space-x-1">
              <IconBike color="#848484" size={14} />
              <Text style={styles.gilroymedium} className="text-[#848484]">
                ₺60
              </Text>
            </View>
            <Text style={styles.gilroymedium} className="text-[#848484]">
              20 to 25 minutes
            </Text>
          </View>
        </View>
        <View className="w-72 mr-6">
          <View className="rounded-lg w-72 h-36 relative">
            <Image
              source={toast}
              className=" w-72 h-36 rounded-lg absolute"
            ></Image>
            <View
              style={styles.box}
              className="bg-white p-2 mx-4 mt-4 border-r-2 border-b-2 rounded-lg flex-row space-x-1 items-center"
            >
              <IconStar size={12} color="#FFC727" />
              <Text style={styles.gilroysemibold} className="text-xs">
                {" "}
                4.5 (34)
              </Text>
            </View>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Text style={styles.gilroymedium}>AFRODIZIAC RESTAURANT</Text>
            <IconHeart color="#848484" size={20} />
          </View>
          <View className="flex-row space-x-3 items-center mt-1">
            <View className="flex-row items-center space-x-1">
              <IconBike color="#848484" size={14} />
              <Text style={styles.gilroymedium} className="text-[#848484]">
                ₺40
              </Text>
            </View>
            <Text style={styles.gilroymedium} className="text-[#848484]">
              10 to 15 minutes
            </Text>
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
