import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'


export default function RegisterInputs() {
  const [isActive, setActive] = useState(false);
  return (
    <View className='mt-10 mx-6'>
      <View>
      <Text style={styles.gilroymedium} className='text-sm'>Email address <Text className='text-[#FFC727]'> *</Text></Text>
      <TextInput style={styles.gilroymedium} placeholder='example@gmail.com' className='mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md'/>
      </View>
      <View className='mt-6'>
      <Text style={styles.gilroymedium} className='text-sm'>Phone number <Text className='text-[#FFC727]'> *</Text></Text>
      <TextInput style={styles.gilroymedium} placeholder='enter a valid phone number' className='mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md'/>
      </View>
      <View className='flex-row space-x-4 items-center'>
      <View className='mt-6'>
      <Text style={styles.gilroymedium} className='text-sm'>First name <Text className='text-[#FFC727]'> *</Text></Text>
      <TextInput style={styles.gilroymedium} placeholder='enter first name' className='mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md w-40'/>
      </View>
      <View className='mt-6'>
      <Text style={styles.gilroymedium} className='text-sm'>Last name <Text className='text-[#FFC727]'> *</Text></Text>
      <TextInput style={styles.gilroymedium} placeholder='enter last name' className='mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md w-40'/>
      </View>
      </View>
      <View className='mt-6'>
      <Text style={styles.gilroymedium} className='text-sm'>Password <Text className='text-[#FFC727]'> *</Text></Text>
      <TextInput style={styles.gilroymedium} placeholder='enter a password' className='mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md'/>
      </View>
      <View className='mt-6'>
      <Text style={styles.gilroymedium} className='text-sm'>Confirm password <Text className='text-[#FFC727]'> *</Text></Text>
      <TextInput style={styles.gilroymedium} placeholder='confirm your password' className='mt-2 border border-[#E3E3E3] py-4 px-4 rounded-md'/>
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