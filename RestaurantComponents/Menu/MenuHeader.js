import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { IconArrowLeft, IconSearch } from "tabler-icons-react-native";
import pasta from "../../assets/Images/jolllofrice.jpg";
import { useNavigation } from "@react-navigation/core";

export default function MenuHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="relative">
        <Image source={pasta} className="w-[100%] h-48" />
      </View>
      <SafeAreaView>
        <View className="mt-8 mx-4 shadow-md shadow-[#eee] pb-4">
          <View className="flex-row items-start justify-between">
            <View className="flex-row items-start space-x-4">
              <Pressable onPress={() => navigation.goBack()}>
                <IconArrowLeft />
              </Pressable>
              <View>
                <Pressable onPress={() => navigation.navigate('RestaurantDetails')}>
                <Text style={styles.gilroysemibold} className="text-sm">
                  Wazobia Restaurant
                </Text>
                <Text
                  style={styles.gilroymedium}
                  className="text-green-600 text-xs"
                >
                  Open <Text className='text-[#797979]'> | Tap for hours, info and more</Text>
                </Text>
                </Pressable>
              </View>
            </View>
            <IconSearch size={20} />
          </View>
          <View className="h-0.5 bg-[#f8f8f8] w-[95%] mt-3 mb-2 items-center justify-center"></View>
          <View className="flex-row space-x-3 mt-3 mx-2">
            <View>
              <Text
                className="text-[#4e4e4e] text-xs"
                style={styles.gilroymedium}
              >
                Delivery time
              </Text>
              <Text
                className="text-[#000] text-xs mt-1"
                style={styles.gilroymedium}
              >
                20 - 30 mins
              </Text>
            </View>
            <View className="bg-[#e2e2e2] h-10 w-0.5"></View>
            <View>
              <Text
                className="text-[#4e4e4e] text-xs"
                style={styles.gilroymedium}
              >
                Rating
              </Text>
              <Text
                className="text-[#000] text-xs mt-1"
                style={styles.gilroymedium}
              >
                4.8 (120)
              </Text>
            </View>
            <View className="bg-[#e2e2e2] h-10 w-0.5"></View>
            <View>
              <Text
                className="text-[#4e4e4e] text-xs"
                style={styles.gilroymedium}
              >
                Order type
              </Text>
              <Text
                className="text-[#000] text-xs mt-1"
                style={styles.gilroymedium}
              >
                Pre-order
              </Text>
            </View>
          </View>
          <View className="h-0.5 bg-[#f8f8f8] w-[95%] mt-3 mb-2 items-center justify-center"></View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-3"
          >
            <View className="bg-[#FFC727] py-2 px-4 rounded-full items-center justify-center">
              <Text style={styles.gilroymedium} className="text-white">
                All
              </Text>
            </View>
            <View className="py-2 px-4 rounded-full items-center justify-center">
              <Text style={styles.gilroymedium} className="text-[#4e4e4e]">
                Rice
              </Text>
            </View>
            <View className="py-2 px-4 rounded-full items-center justify-center">
              <Text style={styles.gilroymedium} className="text-[#4e4e4e]">
                Swallow
              </Text>
            </View>
            <View className="py-2 px-4 rounded-full items-center justify-center">
              <Text style={styles.gilroymedium} className="text-[#4e4e4e]">
                Turkey
              </Text>
            </View>
            <View className="py-2 px-4 rounded-full items-center justify-center">
              <Text style={styles.gilroymedium} className="text-[#4e4e4e]">
                Lunch
              </Text>
            </View>
            <View className="py-2 px-4 rounded-full items-center justify-center">
              <Text style={styles.gilroymedium} className="text-[#4e4e4e]">
                Breakfast
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
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
