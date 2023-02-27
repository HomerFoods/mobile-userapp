import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../Components/ProfileComponent/Header'
import IndexB from '../../Components/ProfileComponent/Account/Index';
import IndexA from '../../Components/ProfileComponent/Profile/IndexProfile';
import FAQCard from '../../Components/ProfileComponent/FAQ/FAQCard';
import FinanceCard from '../../Components/ProfileComponent/Finances/FinanceCard';
import SecurityCard from '../../Components/ProfileComponent/Security/SecurityCard';
import OthersCard from '../../Components/ProfileComponent/Others/OthersCard';
import FavouritesCard from '../../Components/ProfileComponent/Favourites/FavouritesCard';

export default function ProfileTab() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <IndexA/>
        <View className='mt-4'>
        <IndexB/>
        </View>
        <FinanceCard/>
        <SecurityCard/>
        <FAQCard/>
        <OthersCard/>
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