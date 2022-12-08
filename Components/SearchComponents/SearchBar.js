import { View, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { IconSearch } from "tabler-icons-react-native";

export default function SearchBar() {
  return (
    <View className='bg-[#FBFBFB] pb-4 px-6'>
     <SafeAreaView>
         <View className='mt-4 bg-white p-4 flex-row space-x-3 rounded-md'>
             <IconSearch size={20} color='#565656'/>
           <TextInput placeholder='Search food and restaurants' style={styles.gilroymedium}/>
         </View>
     </SafeAreaView>
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