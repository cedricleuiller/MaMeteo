import React from "react";

import MyTabs from "./components/MyTabs";
import { StatusBar, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <MyTabs />
    </View>
  );
}
