import React from "react";
import { Image, TextInput, Button, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Result from "./Result";
import styles from "../styles";

const Stack = createNativeStackNavigator();

function Search() {
  const navigationHandle = useNavigation();
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

  const submit = () => {
    navigationHandle.navigate("Result");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        onPress={submit}
        title="Rechercher une ville"
        color={styles.color}
      />
    </View>
  );
}

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rechercher une ville" component={Search} />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{ headerTitle: "Résultats" }}
      />
    </Stack.Navigator>
  );
}
