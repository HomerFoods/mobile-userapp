import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import restaurant from "../../assets/Images/restaurant.png";
import pastries from "../../assets/Images/pastries.png";

export default function LatestStories() {
  return (
    <View className="mt-6 ml-4">
      <Text style={styles.gilroysemibold} className="text-lg">
        Latest Stories
      </Text>
      <Text style={styles.gilroymedium}>
        Explore the latest food talks around you
      </Text>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View className="w-48 h-64  rounded-lg relative mt-8 mr-4">
              <Image
                source={restaurant}
                className="w-48 h-62 absolute flex items-center text-center justify-center z-0 rounded-lg"
              ></Image>
              <View className="bg-white mx-4 p-4 rounded-lg border-r-2 border-b-2 border-black absolute bottom-20">
                <Text style={styles.gilroymedium} className="text-xs">
                  “ Christmas deals enjoy amazing offers ✨ “
                </Text>
              </View>
              <View className="absolute -bottom-[18px] ml-2 z-20 h-11 w-11 rounded-full">
                  <Image  source={restaurant} className='h-11 w-11 rounded-full border-[#FFC727] border-2'/>
              </View>
            </View>
            <Text style={styles.gilroymedium} className="mt-8 text-black">
              WAZOBIA RESTAURANT
            </Text>
            <Text style={styles.gilroymedium} className="mt-1 text-[#6b6b6b]">
              3 hours ago
            </Text>
          </View>
          <View>
            <View className="w-48 h-64  rounded-lg relative mt-8">
              <Image
                source={pastries}
                className="w-48 h-64 absolute flex items-center text-center justify-center z-0 rounded-lg"
              ></Image>
              <View className="bg-white mx-4 p-4 rounded-lg border-r-2 border-b-2 border-black absolute bottom-20">
                <Text style={styles.gilroymedium} className="text-xs">
                  “ Cakes, donuts, samosa's all for you✨ “
                </Text>
              </View>
              <View className="absolute -bottom-[18px] ml-2 z-20 h-11 w-11 rounded-full">
                  <Image  source={pastries} className='h-11 w-11 rounded-full border-[#FFC727] border-2'/>
              </View>
            </View>
            <Text style={styles.gilroymedium} className="mt-8 text-black">
              MELA'S PASTRIES
            </Text>
            <Text style={styles.gilroymedium} className="mt-1 text-[#6b6b6b]">
              1 day ago
            </Text>
          </View>
        </ScrollView>
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
