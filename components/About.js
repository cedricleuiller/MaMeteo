import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function About() {
  About.navigationOptions = {
    tabBarICon: () => {
      return (
        <Image
          source={require("./icons/user.png")}
          style={{ width: 20, height: 20 }}
        />
      );
    },
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>A propos de l'application</Text>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore facere
        quam natus nemo omnis iusto est, consequuntur placeat sit
        exercitationem? Facilis non enim, ad omnis nisi voluptates rem
        distinctio aperiam.
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    margin: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
