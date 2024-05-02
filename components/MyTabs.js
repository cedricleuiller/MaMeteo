import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import About from "./About";
import Search from "./Search";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBarShowIcon
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#a2273C",
            borderTopWidth: 1,
            borderColor: "#3f101c",
          },
          tabBarIndicatorStyle: { height: 2, backgroundColor: "#FFF" },
          tabBarPressColor: "#FF0000",
        }}
      >
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
