import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { IconArrowLeft, IconSearch } from "tabler-icons-react-native";
import pasta from "../../assets/Images/pasta.png";
import { useNavigation } from "@react-navigation/core";

export default function DetailsHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <View className="space-x-12 text-center flex-row items-center mt-8 mx-4">
        <Pressable onPress={() => navigation.goBack()}>
                <IconArrowLeft />
              </Pressable>
            <View>
          <Text style={styles.gilroymedium} className="text-xl text-[#FFC727]">
            homerfoods.
          </Text>
          <Text style={styles.gilroymedium} className="text-sm text-[#FFC727]">
            taste home away from home.
          </Text>
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
  box: {
    alignSelf: "flex-start",
  },
});
