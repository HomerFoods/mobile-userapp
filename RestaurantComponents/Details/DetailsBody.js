import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IconArrowRight, IconMapPin, IconMessage, IconStar, IconWorld } from "tabler-icons-react-native";
import Seperator from '../../Components/Seperator'

export default function DetailsBody() {
  return (
    <View className='mt-4 pb-32'>
      <View className="mt-8 mx-4 pb-4">
        <View>
          <Text style={styles.gilroysemibold} className="text-sm">
            Wazobia Restaurant
          </Text>
        </View>

        <View className='justify-between flex-row items-center mt-10'>
           <View className='flex-row space-x-4 items-center'>
              <IconMapPin size={16} color='#505050'/>
              <Text style={styles.gilroymedium} className='text-[#505050]'>Ugur mumcu bulvari No. 10, Girne</Text>
           </View>
           <IconArrowRight size={20}/>
        </View>
        <View className="h-0.5 bg-[#f8f8f8] w-[95%] mt-8 mb-2 items-center justify-center"></View>
        <View className='justify-between flex-row items-center mt-6'>
           <View className='flex-row space-x-4 items-center'>
              <IconWorld size={16} color='#505050'/>
              <Text style={styles.gilroymedium} className='text-[#505050]'>Share with your friends</Text>
           </View>
           <IconArrowRight size={20}/>
        </View>
        <View className="h-0.5 bg-[#f8f8f8] w-[95%] mt-8 mb-2 items-center justify-center"></View>
        <View className='justify-between flex-row items-center mt-6'>
           <View className='flex-row space-x-4 items-center'>
              <IconMessage size={16} color='#505050'/>
              <Text style={styles.gilroymedium} className='text-[#505050]'>Send a message</Text>
           </View>
           <IconArrowRight size={20}/>
        </View>
      </View>
        <View className="h-2 bg-[#f8f8f8] w-[100%] mt-6 mb-2 items-center justify-center"></View>
        <View className='mx-6 mt-4'>
        <Text style={styles.gilroysemibold} className="text-sm">
           Ratings
          </Text>
          <View className='justify-between flex-row items-center mt-6'>
           <View className='flex-row space-x-4 items-center'>
              <IconStar size={16} color='#ffc272' fill="#ffc272"/>
              <Text style={styles.gilroymedium} className='text-[#222222]'>4.2 <Text className='text-[#505050]'>(876 reviews)</Text></Text>
           </View>
           <IconArrowRight size={20}/>
        </View>
        </View>
        <View className="h-2 bg-[#f8f8f8] w-[100%] mt-6 mb-2 items-center justify-center"></View>
        <View className='mx-6 mt-4'>
        <Text style={styles.gilroysemibold} className="text-sm">
           Opening hours
          </Text>
          <View className='mt-6'>
          <Text style={styles.gilroymedium} className='text-[#252525]'>Monday - Saturday</Text>
              <Text style={styles.gilroymedium} className='text-[#505050] mt-2'>09:00 am - 09:00 pm</Text>
              <Text style={styles.gilroymedium} className='text-[#252525] mt-6'>Sunday</Text>
              <Text style={styles.gilroymedium} className='text-[#505050] mt-2'>09:00 am - 06:00 pm</Text>
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
