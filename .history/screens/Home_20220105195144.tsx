import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Header, Button } from "../components/Themed";

import { signOut } from "../api/authentication";

import Navigation from "../views/Navigation"

export default function Home() {
  return (
    <View style={styles.container}>
      <Header>HOME!!!!</Header>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.text}>
        This is a home for you to save everything you like in one place. 
        Feel free to create shared boards with friends or run it solo dolo
      </Text>
      <Button onPress={() => signOut()}>
        <Text style={styles.buttonText}>Log out</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  text: {
    marginBottom: 48
  },
  buttonText: {
    color: "white",
  },
  separator: {
    marginVertical: 24,
    height: 1,
    width: "80%",
  },
});
