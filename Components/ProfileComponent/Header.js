import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.appbar}>
      <SafeAreaView>
        <View className="p-4">
          <Text style={styles.gilroysemibold} className="text-xl">
            Profile
          </Text>
        </View>
      </SafeAreaView>
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
