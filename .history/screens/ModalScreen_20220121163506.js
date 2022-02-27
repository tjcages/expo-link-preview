import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, Container, View } from "../components/Themed";
import Navigation from "../views/modal/Navigation";

const ModalScreen = (props) => {

  const onDismissHandler = () => {
    props.navigation.pop(1)
  }
  
  return (
    <Container style={styles.container}>
      <Navigation onDismiss={() => onDismissHandler()} />

      <Container style={styles.content}>

      </Container>

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
  content: {

  },
});

export default ModalScreen