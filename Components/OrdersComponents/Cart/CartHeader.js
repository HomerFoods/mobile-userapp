import { View, Text, StyleSheet, SafeAreaView, Image, Pressable } from "react-native";
import React from "react";
import { IconArrowLeft, IconTrash } from "tabler-icons-react-native";
import { useNavigation } from "@react-navigation/core";

export default function CartHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <View className="p-4 flex-row justify-between items-center">
          <View className='flex-row space-x-3 items-center'>
          <Pressable onPress={() => navigation.goBack()}>
        <IconArrowLeft size={26} color="#000" />
          </Pressable>
          <Text style={styles.gilroysemibold} className="text-2xl">
            Cart
          </Text>
          </View>
          <IconTrash size={20} color="#ff8484" />
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
