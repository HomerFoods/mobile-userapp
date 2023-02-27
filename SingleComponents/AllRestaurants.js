import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import fooda from "../assets/Images/hf1.jpg";
import foodb from "../assets/Images/thai-wide.jpg";
import foodc from "../assets/Images/pzz.jpeg";
import foodd from "../assets/Images/pasta.png";
import { IconStar, IconHeart, IconBike } from "tabler-icons-react-native";

export default function Restaurants() {
  return (
    <View className="">
        <View className="w-[94%]">
          <View className="rounded-lg w-[114%] h-36 relative">
            <Image
              source={foodc}
              className="w-[88%] h-36 rounded-lg absolute"
            ></Image>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Text style={styles.gilroysemibold} className='text-black'>Reign Restaurant</Text>
            <IconHeart color="#848484" size={20} />
          </View>
          <View className="flex-row space-x-3 items-center justify-between mt-1">
            <View className="flex-row items-center space-x-1">
              <IconBike color="#848484" size={14} />
              <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
               | ₺0  Delivery fee |
              </Text>
            <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
            10 - 15 min  |
            </Text>
            <Text style={styles.gilroymedium} className="text-[#49bb4d] text-xs">
            Open
            </Text>
            </View>
            <View className='flex-row space-x-1 items-center'>
              <IconStar size={12} color="#FFC727" fill="#FFC727"/>
              <Text style={styles.gilroysemibold} className="text-xs">
                {" "}
                4.5 (34)
              </Text>
            </View>
          </View>
        </View>
        <View className="w-[94%] mt-10">
          <View className="rounded-lg w-[114%] h-36 relative">
            <Image
              source={foodb}
              className="w-[88%] h-36 rounded-lg absolute"
            ></Image>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Text style={styles.gilroysemibold} className='text-black'>Reign Restaurant</Text>
            <IconHeart color="#848484" size={20} />
          </View>
          <View className="flex-row space-x-3 items-center justify-between mt-1">
            <View className="flex-row items-center space-x-1">
              <IconBike color="#848484" size={14} />
              <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
               | ₺0  Delivery fee |
              </Text>
            <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
            10 - 15 min  |
            </Text>
            <Text style={styles.gilroymedium} className="text-[#49bb4d] text-xs">
            Open
            </Text>
            </View>
            <View className='flex-row space-x-1 items-center'>
              <IconStar size={12} color="#FFC727" fill="#FFC727"/>
              <Text style={styles.gilroysemibold} className="text-xs">
                {" "}
                4.5 (34)
              </Text>
            </View>
          </View>
        </View>
        <View className="w-[94%] mt-10">
          <View className="rounded-lg w-[114%] h-36 relative">
            <Image
              source={fooda}
              className="w-[88%] h-36 rounded-lg absolute"
            ></Image>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Text style={styles.gilroysemibold} className='text-black'>Reign Restaurant</Text>
            <IconHeart color="#848484" size={20} />
          </View>
          <View className="flex-row space-x-3 items-center justify-between mt-1">
            <View className="flex-row items-center space-x-1">
              <IconBike color="#848484" size={14} />
              <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
               | ₺0  Delivery fee |
              </Text>
            <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
            10 - 15 min  |
            </Text>
            <Text style={styles.gilroymedium} className="text-[#49bb4d] text-xs">
            Open
            </Text>
            </View>
            <View className='flex-row space-x-1 items-center'>
              <IconStar size={12} color="#FFC727" fill="#FFC727"/>
              <Text style={styles.gilroysemibold} className="text-xs">
                {" "}
                4.5 (34)
              </Text>
            </View>
          </View>
        </View>
        <View className="w-[94%] mt-10">
          <View className="rounded-lg w-[114%] h-36 relative">
            <Image
              source={foodd}
              className="w-[88%] h-36 rounded-lg absolute"
            ></Image>
          </View>
          <View className="flex-row justify-between mt-4 items-center">
            <Text style={styles.gilroysemibold} className='text-black'>Reign Restaurant</Text>
            <IconHeart color="#848484" size={20} />
          </View>
          <View className="flex-row space-x-3 items-center justify-between mt-1">
            <View className="flex-row items-center space-x-1">
              <IconBike color="#848484" size={14} />
              <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
               | ₺0  Delivery fee |
              </Text>
            <Text style={styles.gilroymedium} className="text-[#979797] text-xs">
            10 - 15 min  |
            </Text>
            <Text style={styles.gilroymedium} className="text-[#49bb4d] text-xs">
            Open
            </Text>
            </View>
            <View className='flex-row space-x-1 items-center'>
              <IconStar size={12} color="#FFC727" fill="#FFC727"/>
              <Text style={styles.gilroysemibold} className="text-xs">
                {" "}
                4.5 (34)
              </Text>
            </View>
          </View>
        </View>
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
