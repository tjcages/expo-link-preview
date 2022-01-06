import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Header, Button } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import GoogleIcon from "../assets/icons/google.svg";

const Login = (props: JSX.IntrinsicAttributes) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header style={styles.header}>Login Here!</Header>
        <Text style={styles.text}>And read some more stuff here</Text>

        <Button
          style={styles.button}
          onPress={() => {
            console.log("Hey nerd!!!");
            // promptAsync();
          }}
        >
          <GoogleIcon style={styles.googleIcon} />
          <Text style={styles.googleText}>Get started now</Text>
        </Button>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  header: {
    paddingBottom: 8,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
  button: {
    marginTop: 24
  },
  googleText: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
});

export default Login;
