import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

export default function LoginHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <View className='mt-6 mx-6'>
          <Text style={styles.gilroysemibold} className="text-xl">
            Login
          </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.gilroymedium} className="text-sm mt-1">
            Don't have an account? <Text className='text-[#FFC727]'> Register</Text>
          </Text>
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
