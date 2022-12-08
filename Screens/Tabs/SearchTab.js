import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../../Components/SearchComponents/SearchBar'
import Categories from '../../Components/SearchComponents/Categories';
import SearchHistory from '../../Components/SearchComponents/SearchHistory';

export default function SearchTab() {
  return (
    <View style={styles.container}>
     <SearchBar/>
     <ScrollView>
     <Categories/>
     <SearchHistory/>
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