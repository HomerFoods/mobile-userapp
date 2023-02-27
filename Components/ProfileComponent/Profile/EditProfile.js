import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EditProfileHeader from '../../../AuthenticationComponents/EditProfileComponents/EditProfileHeader'
import EditProfileInput from '../../../AuthenticationComponents/EditProfileComponents/EditProfileInputs'
import EditProfileFooter from '../../../AuthenticationComponents/EditProfileComponents/EditProfileFooter'

export default function EditProfile() {
  return (
    <View style={styles.container} className='pt-20'>
      <KeyboardAwareScrollView>
        <EditProfileHeader/>
        <EditProfileInput/>
        <EditProfileFooter/>
      </KeyboardAwareScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});