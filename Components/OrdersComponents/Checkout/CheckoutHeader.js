import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { IconArrowLeft, IconPlus } from "tabler-icons-react-native";
import { useNavigation } from "@react-navigation/core";

export default function CheckoutHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <View className="p-4 flex-row justify-between items-center">
          <View className="space-x-3 flex-row items-center">
            <Pressable onPress={() => navigation.goBack()}>
              <IconArrowLeft size={26} color="#000" />
            </Pressable>
            <Text style={styles.gilroysemibold} className="text-2xl">
              Checkout
            </Text>
          </View>
          <Pressable className='bg-[#e5faeb] py-3 px-4 flex-row space-x-2 items-center rounded-full'>
              <Text style={styles.gilroymedium} className='text-[#18b946]'>Add More Items</Text>
              <IconPlus size={16} color='#18b946'/>
          </Pressable>
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
});
