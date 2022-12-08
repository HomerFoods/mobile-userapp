import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IconArrowRight } from "tabler-icons-react-native";

export default function FAQCard() {
  return (
    <View className="mt-8">
      <View className="mx-4 border border-[#FFC727] rounded-md p-3 flex-row justify-between items-center">
          <View className='flex-row space-x-4 items-center'>
        <View className="bg-[#FFF7E4] rounded-full h-14 w-14 items-center justify-center">
          <View className="bg-[#FFC727] rounded-full h-8 w-8 items-center justify-center">
              <Text className='text-white text-lg'>?</Text>
          </View>
        </View>
        <View>
          <Text
            style={styles.gilroysemibold}
            className="text-base text-[#2D240B]"
          >
            FAQs & Support
          </Text>
          <Text style={styles.gilroymedium} className="text-sm text-[#767676]">
            Get support or send feedback
          </Text>
        </View>
          </View>
        <IconArrowRight />
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
  gilroybold: {
    fontFamily: "GilroyBold",
  },
});
