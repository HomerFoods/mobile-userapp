import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  IconCreditCard,
  IconWallet,
  IconArrowLeft,
} from "tabler-icons-react-native";

export default function EditProfileHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <View className="mt-2 mx-6">
          <Pressable onPress={() => navigation.goBack()}>
            <View className="flex-row space-x-2 items-center">
              <IconArrowLeft size={20} />
              <Text style={styles.gilroysemibold} className="text-sm">
                Back
              </Text>
            </View>
          </Pressable>
          <View className="mt-4">
            <Pressable>
              <Text style={styles.gilroymedium} className="text-sm mt-1">
               Make changes to your account
              </Text>
            </Pressable>
          </View>
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
