import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";


export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <View className='mt-6 mx-6'>
          <Text style={styles.gilroysemibold} className="text-xl">
            Create your account
          </Text>
          <Pressable  onPress={() => navigation.navigate("Login")}>
          <Text style={styles.gilroymedium} className="text-sm mt-1">
            Have an account? <Text className='text-[#FFC727]'> Login</Text>
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
