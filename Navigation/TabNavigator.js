import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "../Screens/Tabs/HomeTab";
import SearchTab from "../Screens/Tabs/SearchTab";
import OrderTab from "../Screens/Tabs/OrderTab";
import MessageTab from "../Screens/Tabs/MessageTab";
import ProfileTab from "../Screens/Tabs/ProfileTab";
import { IconSmartHome, IconSearch, IconUserCircle, IconShoppingBag, IconBrandHipchat, IconMessage, IconMessageChatbot, IconMessageCircle } from "tabler-icons-react-native";

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
        component={HomeTab}
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
          title: "Messages",
          tabBarBadge: 4,
          tabBarBadgeStyle: {backgroundColor: '#FFC727', color: '#fff' },
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
        component={ProfileTab}
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
