import { View, Text, StyleSheet, Pressable, SafeAreaView, Image, ImageBackground, Dimensions} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import getstarted from '../../assets/Images/getstarted.png'
import { StatusBar } from 'expo-status-bar';

let windowHeight = Dimensions.get('window').height;
export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={getstarted} className='' style={styles.image} resizeMethod="scale">

      <SafeAreaView className='mt-28'>
       
       <Text style={styles.gilroymedium} className='text-[#FFC727] text-2xl justify-center items-center text-center'>homerfoods</Text>
      </SafeAreaView>
      <View style={styles.bottom}>
      <Pressable
      className='flex items-center justify-center text-center rounded-md'
        onPress={() => navigation.navigate("Register")}
      >
        <View className=' bg-[#FFC727] rounded-md items-center w-[90%] mx-2 p-3'>
        <Text style={styles.gilroymedium} className="text-sm text-[#1B0D01]">
          Get Started
        </Text>
        </View>
      </Pressable>
      <Pressable
      className='flex items-center justify-center text-center mt-4'
        onPress={() => navigation.navigate("Register")}
      >
        <View className=' border-[#FFC727] rounded-md border items-center w-[90%] mx-2 p-3'>
        <Text style={styles.gilroymedium} className="text-sm text-[#FFC727]">
         Sign In
        </Text>
        </View>
      </Pressable>
      </View>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  gilroymedium: {
    fontFamily: "GilroyMedium",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    height: windowHeight,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    marginBottom: 60,
  },
  btn: {
    backgroundColor: "#FFC727",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
  },
});
