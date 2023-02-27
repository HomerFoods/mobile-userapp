import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'


export default function LoginInputs() {
  const [isActive, setActive] = useState(false);
  return (
    <View className='mt-10 mx-6'>
      <View>
      <Text style={styles.gilroymedium} className='text-sm'>Email address <Text className='text-[#FFC727]'> *</Text></Text>
      <TextInput style={styles.gilroymedium} placeholder='example@gmail.com' className='mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md'/>
      </View>
      <View className='mt-6'>
      <Text style={styles.gilroymedium} className='text-sm'>Password <Text className='text-[#FFC727]'> *</Text></Text>
      <TextInput style={styles.gilroymedium} placeholder='********' className='mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md'/>
      </View>
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