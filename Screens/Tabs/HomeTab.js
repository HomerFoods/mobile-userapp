import { View, StyleSheet, ScrollView,} from "react-native";
import React from "react";
import HomeHeader from "../../Components/HomeComponents/HomeHeader";
import Categories from "../../Components/HomeComponents/Categories";
import LatestStories from "../../Components/HomeComponents/LatestStories";
import Seperator from "../../Components/Seperator";
import FeaturedRestaurants from "../../Components/HomeComponents/FeaturedRestaurants";
import AllRestaurantsHome from "../../Components/HomeComponents/AllRestaurantsHome";

export default function HomeTab() {
  return (
    <View style={styles.container}>
     <HomeHeader/>
     <ScrollView>
     <Categories/>
     <FeaturedRestaurants/>
     <Seperator/>
     <LatestStories/>
     <Seperator/>
     <AllRestaurantsHome/>
     </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
