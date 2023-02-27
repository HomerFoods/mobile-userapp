import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  IconArrowRight,
  IconBell,
  IconShieldCheck,
  IconMap,
  IconMapPin
} from "tabler-icons-react-native";

export default function Index() {
  return (
    <View className="mt-1">
      <View className="bg-[#FFF] p-4">
        <Text style={styles.gilroysemibold} className="text-base">
          Personal
        </Text>
      </View>

      <View className="mt-2 bg-[#fff] p-3 rounded-md mx-4">
        <View className="flex-row justify-between mt-">
          <View className="space-x-3 flex-row items-center">
            <View className="bg-[#fff4d7] p-2 rounded-full">
              <IconShieldCheck size={20} color="#FFC727" />
            </View>
            <Text style={styles.gilroymedium} className='text-sm'>Account Verification</Text>
          </View>
          <View className="bg-[#F2FFEE] border border-green-600 p-2 rounded-lg items-center justify-center">
            <Text className="text-green-600" style={styles.gilroymedium}>
              Verified
            </Text>
          </View>
        </View>

        <View className="h-[0.5] mt-5 ml-10 w-[90%] mr-6 bg-[#eee]"></View>

        <View className="flex-row justify-between mt-4 items-center">
        <View className="space-x-3 flex-row items-center">
          <View className="bg-[#fff4d7] p-2 rounded-full">
            <IconMapPin size={20} color="#FFC727" />
          </View>
          <Text style={styles.gilroymedium} className='text-sm'>Change Address</Text>
        </View>
        <IconArrowRight size={20} color="#000" />
        </View>

        <View className="h-[0.5] mt-5 ml-10 w-[90%] mr-6 bg-[#dadada]"></View>

        <View className="flex-row justify-between mt-4 items-center">
          <View className="space-x-3 flex-row items-center">
            <View className="bg-[#fff4d7] p-2 rounded-full">
              <IconBell size={20} color="#FFC727" />
            </View>
            <Text style={styles.gilroymedium} className='text-sm'>Notifications</Text>
          </View>
          <IconArrowRight size={20} color="#000" />
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
  gilroysemibold: {
    fontFamily: "GilroySemiBold",
  },
});
