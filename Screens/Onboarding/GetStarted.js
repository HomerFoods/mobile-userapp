import { View, Text, StyleSheet, Pressable, SafeAreaView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>

      <Pressable
        className="justify-center flex items-center mt-20 mx-12"
        style={styles.btn}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.gilroymedium} className="text-sm text-black">
          Get Started
        </Text>
      </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  gilroymedium: {
    fontFamily: "GilroyMedium",
  },
  btn: {
    backgroundColor: "#FFC727",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
  },
});
