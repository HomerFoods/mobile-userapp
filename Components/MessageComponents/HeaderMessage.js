import { View, Text, StyleSheet, SafeAreaView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import bag from "../../assets/Icons/Bag.png";
import { useNavigation } from "@react-navigation/core";
import { IconArrowRight, IconPlus } from "tabler-icons-react-native";

const HeaderMessage = ({chooseselected, selected}) => {
  const navigation = useNavigation();

  return (
    <View className='bg-[#FBFBFB]'>
      <SafeAreaView>
        <View className="p-4 flex-row justify-between items-center pb-4">
          <Text style={styles.gilroysemibold} className="text-2xl">
            Messages
          </Text>
        </View>
        <View className='flex-row space-x-4 items-center py-2 px-4 mt-4 justify-center bg-[#eee] mx-3 rounded-md mb-4'>
           <Pressable className={`${selected == 0 ? 'bg-black ease-in-out': 'bg-[#eee]'} rounded-md p-4 w-[50%] flex-row justify-center items-center space-x-2 ease-in-out`} onPress={()=>chooseselected(0)}>
             <Text style={styles.gilroymedium} className={`${selected < 1 ? 'text-white': 'text-[#bdbdbd]'}`}>Active Messages</Text>
             <View className=' h-6 w-6 bg-white rounded-full items-center justify-center'>
                <Text style={styles.gilroymedium}>4</Text>
             </View>
           </Pressable>
           <Pressable className={`${selected == 2 ? 'bg-black ease-in-out duration-75' : 'bg-[#eee]'} rounded-md p-4 w-[50%] flex-row justify-center items-center space-x-2`} onPress={()=>chooseselected(2)} >
             <Text style={styles.gilroymedium} className={`${selected == 2 ? 'text-white': 'text-[#bdbdbd]'}`}>Add New Chat</Text>
             <IconPlus color="#bdbdbd" size={20}/>
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

export default HeaderMessage;
