import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, Container, View } from "../components/Themed";
import Navigation from "../views/modal/Navigation";

export default function ModalScreen() {

  const onDismissHandler = () => {
    props.navigation.pop(1)
  }
  
  return (
    <Container style={styles.container}>
      <Navigation onDismiss={onDismissHandler} />
      <Text style={styles.title}>Modal</Text>
      <Container
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
