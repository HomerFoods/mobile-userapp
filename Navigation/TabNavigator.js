import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchTab from "../Screens/Tabs/SearchTab";
import OrderTab from "../Screens/Tabs/OrderTab";
import MessageTab from "../Screens/Tabs/MessageTab";
import { IconSmartHome, IconSearch, IconUserCircle, IconShoppingBag, IconBrandHipchat, IconMessage, IconMessageChatbot, IconMessageCircle } from "tabler-icons-react-native";
import HomeStack from "./HomeStack";
import AccountStack from "./AccountStack";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#FFC727",
        tabBarInactiveTintColor: "#C3C3C3",
        tabBarShowLabel: true,
        tabBarItemStyle: {
          margin: 4,
          borderRadius: 20,
          justifyContent: "center",
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          paddingBottom: 32,
          paddingTop: 12,
          height: 98,
          backgroundColor: "#fff",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <IconSmartHome
              size={28}
              color={`${focused ? "#FFC727" : "#E0E0E0"}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <IconSearch
              size={28}
              color={`${focused ? "#FFC727" : "#C3C3C3"}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderTab}
        options={{
          title: "Orders",
          tabBarBadge: 1,
          tabBarBadgeStyle: {backgroundColor: '#FFC727', color: '#fff' },
          tabBarIcon: ({ color, focused }) => (
            <IconShoppingBag
              size={28}
              color={`${focused ? "#FFC727" : "#C3C3C3"}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageTab}
        options={{
          title: "Support",
          tabBarIcon: ({ color, focused }) => (
            <IconMessageCircle
              size={28}
              color={`${focused ? "#FFC727" : "#C3C3C3"}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountStack}
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <IconUserCircle
              size={28}
              color={`${focused ? "#FFC727" : "#C3C3C3"}`}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
