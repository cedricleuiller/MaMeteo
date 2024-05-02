import React from "react";
import { Image, TextInput, Button } from "react-native";
import styles from "../styles";

export default function Search() {
  const [text, onChangeText] = React.useState("Paris");

  Search.navigationOptions = {
    tabBarICon: () => {
      return (
        <Image
          source={require("./icons/home.png")}
          style={{ width: 20, height: 20 }}
        />
      );
    },
  };

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        onPress={() => this.submit()}
        title="Rechercher une ville"
        color={styles.color}
      />
    </>
  );
}
