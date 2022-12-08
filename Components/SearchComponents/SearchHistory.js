import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IconClock } from "tabler-icons-react-native";

export default function SearchHistory() {
  return (
    <View className="mt-12 mx-4">
      <View className="flex-row justify-between items-center">
        <Text style={styles.gilroysemibold} className="text-base">
          SearchHistory
        </Text>
        <Text style={styles.gilroymedium} className="text-sm text-red-600">
          clear
        </Text>
      </View>

      <View className="mt-4">
        <View className="flex-row space-x-1 items-center">
          <IconClock size={14} color={"#848484"} />
          <Text style={styles.gilroymedium} className="text-sm text-[#848484]">
            Fried rice and peppered chicken
          </Text>
        </View>
        <View className="flex-row space-x-1 items-center mt-2">
          <IconClock size={14} color={"#848484"} />
          <Text style={styles.gilroymedium} className="text-sm text-[#848484]">
            Pepper soup
          </Text>
        </View>
        <View className="flex-row space-x-1 items-center mt-2">
          <IconClock size={14} color={"#848484"} />
          <Text style={styles.gilroymedium} className="text-sm text-[#848484]">
            Isi ewu and orange juice
          </Text>
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
