import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/core";

export default function LoginFooter() {
  const navigation = useNavigation();
  return (
    <View className='mt-10 mx-6'>
     <Pressable className='bg-[#FFC727] p-4 items-center justify-center rounded-md' onPress={() => navigation.navigate("Home")}>
       <Text style={styles.gilroysemibold} className='text-white'>
        Login
       </Text>
     </Pressable>
     <Text style={styles.gilroymedium} className='text-[#3e3e3e] mt-6 items-center justify-center flex text-center'>
        Forgot your password ?
       </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  gilroymedium: {
    fontFamily: "GilroyMedium",
  },
  gilroysemibold: {
    fontFamily: "GilroySemiBold",
  },
});