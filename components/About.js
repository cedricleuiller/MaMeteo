import React from "react";
import { Text, View, Image, Button } from "react-native";
import styles from "../styles";

export default function About({ navigation }) {
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
    <View style={styles.container}>
      <Text style={styles.title}>A propos de l'application</Text>
      <Text style={styles.marginText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore facere
        quam natus nemo omnis iusto est, consequuntur placeat sit
        exercitationem? Facilis non enim, ad omnis nisi voluptates rem
        distinctio aperiam.
      </Text>
      <Button
        onPress={() => {
          navigation.navigate("Search");
        }}
        title="Rechercher une ville"
        color={styles.color}
      />
    </View>
  );
}
