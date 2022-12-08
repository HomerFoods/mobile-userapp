import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import icon from "../../../assets/icon.png";
import {
  IconArrowRight,
  IconBook,
  IconCheckbox,
  IconInfoCircle,
  IconMapPin,
  IconMinus,
  IconPlus,
  IconTrash,
  IconWallet,
} from "tabler-icons-react-native";

export default function CheckoutBody() {
  return (
    <View className=" mt-1 mb-10" style={styles.bg}>
        <ScrollView>

      <View className="mx-6">
        <View
          style={styles.box}
          className="flex-row space-x-2 items-center p-2 mt-4 justify-center bg-[#eee] rounded-full"
        >
          <Pressable className="bg-black rounded-full py-4 px-6 w-[50%] flex-row justify-center">
            <Text style={styles.gilroymedium} className="text-white">
              Delivery
            </Text>
          </Pressable>
          <Pressable className="bg-[#eee] rounded-full py-4 px-6 w-[50%] flex-row justify-center">
            <Text style={styles.gilroymedium} className="text-[#bdbdbd]">
              Pickup
            </Text>
          </Pressable>
        </View>
        <Text className="mt-8 text-base" style={styles.gilroysemibold}>
          Item details
        </Text>
        <View className="flex-row justify-between items-center mt-6">
          <View className="flex-row space-x-3 items-center">
            <Image source={icon} className="h-10 w-10" />
            <View>
              <Text style={styles.gilroysemibold} className="text-sm">
                Special Fried Rice
              </Text>
              <Text style={styles.gilroymedium} className="text-[#858585] mt-1">
                ₺140
              </Text>
            </View>
          </View>
          <View className="items-end flex ">
            <View className="bg-[#f5f5f5] py-3 px-4 rounded-full flex-row space-x-3 items-center justify-center">
              <IconMinus size={20} color="#000" />
              <Text style={styles.gilroymedium} className="text-[#000] mx-2">
                1
              </Text>
              <IconPlus size={20} color="#000" />
            </View>
            <IconTrash size={20} color="#ff8484" className=" mt-4" />
          </View>
        </View>
        <View className="h-[0.5] mt-5 ml-2 w-[95%] mr-2 bg-[#EEE]"></View>

        <Text className="mt-8 text-base" style={styles.gilroysemibold}>
          Delivery
        </Text>

        <View className="flex-row justify-between items-center mt-6">
          <View className="flex-row space-x-3 items-center">
            <IconMapPin size={20} />
            <View>
              <Text style={styles.gilroymedium} className="text-sm">
                Akacan Elegance, Fashion Block B
              </Text>
              <Text style={styles.gilroymedium} className="text-[#858585] mt-1">
                Delivery Address
              </Text>
            </View>
          </View>
        </View>

        <View className="h-[0.5] mt-5 ml-2 w-[95%] mr-2 bg-[#cccccc]"></View>

        <View className="flex-row justify-between items-center mt-6">
          <View className="flex-row space-x-3 items-center">
            <IconBook size={20} />
            <View>
              <Text style={styles.gilroymedium} className="text-sm">
                Delivery Note
              </Text>
            </View>
          </View>
        </View>
        <View className="h-[0.5] mt-5 ml-2 w-[95%] mr-2 bg-[#ebebeb]"></View>
        
        <View className="flex-row justify-between mt-9">
          <Text className=" text-[#797979] text-base" style={styles.gilroymedium}>Sub total</Text>
          <Text className=" text-[#797979] text-base" style={styles.gilroymedium}>₺140</Text>
        </View>
        <View className="flex-row justify-between mt-3">
          <View className='flex-row space-x-2 items-start'>
          <Text className=" text-[#797979] text-base" style={styles.gilroymedium}>Delivery Fee</Text>
          </View>
          <Text className=" text-[#797979] text-base" style={styles.gilroymedium}>₺40</Text>
        </View>
        <View className="flex-row justify-between mt-3">
        <View className='flex-row space-x-2 items-start'>
          <Text className=" text-[#797979] text-base" style={styles.gilroymedium}>Service Fee</Text>
          <IconInfoCircle size={16}/>
          </View>
          <Text className=" text-[#797979] text-base" style={styles.gilroymedium}>₺10</Text>
        </View>
        <View className="flex-row justify-between mt-4">
          <Text className=" text-[#000] text-base" style={styles.gilroysemibold}>Total</Text>
          <Text className=" text-[#000] text-base" style={styles.gilroymedium}>₺190</Text>
        </View>
      </View>

      <View className="bg-[#FBFBFB] py-4 px-6 mt-8">
        <Text className=" text-base" style={styles.gilroysemibold}>
          Payment Method
        </Text>
      </View>
      <View className="flex-row justify-between mt-3 mx-6 items-center">
        <View className='flex-row space-x-2 items-start'>
          <IconWallet size={20}/>
         <View>
         <Text className=" text-[#000] text-base" style={styles.gilroymedium}>₺0</Text>
         <Text className=" text-[#797979] text-sm" style={styles.gilroymedium}>Your Wallet</Text>
         </View>
          </View>
          <View className='bg-[#FFF7E4] rounded-full h-8 w-8 items-center justify-center'>
             <View  className='bg-[#FFC727] rounded-full p-2'>

             </View>
          </View>
        </View>
        <View className="h-[0.5] mt-5 ml-2 w-[95%] mr-2 bg-[#ebebeb] mx-4"></View>
        <View className="flex-row justify-between mt-3 mx-6 items-center">
        <View className='flex-row space-x-2 items-start'>
          <IconPlus size={20}/>
         <View>
         <Text className=" text-[#000] text-base" style={styles.gilroymedium}>Other Payment methods</Text>
         </View>
          </View>
          <View className='bg-[#fff] border rounded-full h-5 w-5 items-center justify-center mr-1'>
             <View  className='bg-[#fff] rounded-full p-2'>

             </View>
          </View>
        </View>
        <View className="h-[0.5] mt-5 ml-2 w-[95%] mr-2 bg-[#ebebeb] mx-4"></View>
        </ScrollView>
      <Pressable
        className="bg-[#FFCC00] justify-center flex items-center mt-4 mb-3 mx-4"
        style={styles.bottom}
      >
        <Text style={styles.gilroysemibold} className="text-white text-base">
          Place Order
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#FEFEFF",
    flex: 1,
  },
  gilroymedium: {
    fontFamily: "GilroyMedium",
  },
  gilroysemibold: {
    fontFamily: "GilroySemiBold",
  },
  bottom: {
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
  },
  box: {
    alignSelf: "flex-start",
    justifyContent: "center",
  },
});
