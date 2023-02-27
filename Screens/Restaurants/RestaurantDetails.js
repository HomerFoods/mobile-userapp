import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import DetailsHeader from '../../RestaurantComponents/Details/DetailsHeader';
import DetailsBody from '../../RestaurantComponents/Details/DetailsBody';

export default function RestaurantDetails() {
  return (
    <View style={styles.container}>
      <DetailsHeader/>
      <ScrollView>
        <DetailsBody/>
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
