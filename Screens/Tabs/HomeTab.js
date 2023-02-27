import { View, StyleSheet, ScrollView,} from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import HomeHeader from "../../Components/HomeComponents/HomeHeader";
import Categories from "../../Components/HomeComponents/Categories";
import LatestStories from "../../Components/HomeComponents/LatestStories";
import Seperator from "../../Components/Seperator";
import FeaturedRestaurants from "../../Components/HomeComponents/FeaturedRestaurants";
import AllRestaurantsHome from "../../Components/HomeComponents/AllRestaurantsHome";
import MadeForYou from "../../Components/HomeComponents/MadeForYou";
import NewCategory from "../../Components/HomeComponents/NewCategory";

export default function HomeTab() {
  return (
    <View style={styles.container}>
     <HomeHeader/>
     <ScrollView>
     <Categories/>
   <Seperator/>
     <FeaturedRestaurants/>
     <Seperator/>
     <MadeForYou/>
     <Seperator/>
     <AllRestaurantsHome/>
     </ScrollView>
     <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
