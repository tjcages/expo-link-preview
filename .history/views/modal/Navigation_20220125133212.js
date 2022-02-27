import React from "react";
import { View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Divider, NavButton, Container } from "../../components/Themed";

import useColorScheme from "../../hooks/useColorScheme";

const Navigation = (props) => {
  return (
    <Container>
      <View style={styles.content}>
        <NavButton text="Done" onPress={props.onDismiss} />
      </View>
      <Divider style={{ marginBottom: 0 }} />
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 4,
    backgroundColor: "transparent",
  },
  button: {
    width: 36,
    height: 36,
    padding: 0,
    backgroundColor: "transparent",
  },
});

export default Navigation;
