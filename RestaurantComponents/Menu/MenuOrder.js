import { Text, View, StyleSheet, Image, SafeAreaView, Pressable } from "react-native";
import React from "react";
import jollofrice from "../../assets/Images/jolllofrice.jpg";
import friedrice from "../../assets/Images/friedricea.jpg";
import { IconMinus, IconPlus, IconX } from "tabler-icons-react-native";

export default function MenuOrder() {
  return (
    <View style={styles.bg} className='rounded-t-3xl'>
      <SafeAreaView>
        <View className="items-center flex justify-center text-center bg-[#cacaca] w-[100%] rounded-t-3xl relative">
          <Image
            source={friedrice}
            className="w-[100%] h-48 items-center flex justify-center text-center"
            resizeMode="contain"
          />
          <View className='bg-white p-2 absolute top-8 left-4 rounded-full'>
             <IconX/>
          </View>
        </View>

      </SafeAreaView>

      <View className='mx-2 mt-10'>
      <Text style={styles.gilroysemibold} className='text-lg'>Fried rice</Text>
      <Text style={styles.gilroymedium} className='text-xs text-[#818181] mt-1'>Big bowl Special fried rice with Turkey, Plantain and coleslaw. </Text>
      </View>
        <View style={styles.bottom} className="flex-row space-x-4 mb-5 mx-2">
          <View className='flex-row space-x-6 items-center border rounded-md border-[#FFC727] py-4 px-4'>
            <Pressable>
              <IconMinus size={20}/>
            </Pressable>
            <Text style={styles.gilroymedium}>1</Text>
            <Pressable>
              <IconPlus size={20}/>
            </Pressable>
          </View>
          <Pressable className='bg-[#FFC727] py-5 w-[60%] flex items-center justify-center rounded-md'>
            <Text style={styles.gilroysemibold} className='text-[#3e3e3e]'>Add 140TL</Text>
          </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  gilroymedium: {
    fontFamily: "GilroyMedium",
  },
  gilroysemibold: {
    fontFamily: "GilroySemiBold",
  },
  bottom: {
    alignItems: "flex-end",
    padding: 16,
    flex: 1,
    borderRadius: 10,
  },
  box: {
    alignSelf: "flex-start",
    justifyContent: "center",
  },
});
