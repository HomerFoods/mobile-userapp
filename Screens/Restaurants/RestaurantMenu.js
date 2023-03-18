import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MenuHeader from '../../RestaurantComponents/Menu/MenuHeader'
import Menu from '../../RestaurantComponents/Menu/Menu';

export default function RestaurantMenu() {

  return (
    <View style={styles.container}>
      <MenuHeader/>
      <ScrollView>
        <Menu/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
