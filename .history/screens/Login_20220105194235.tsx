import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Header, Button } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import { onSignIn } from "../api/authentication";

import GoogleIcon from "../assets/icons/google.svg";

const Login = (props: JSX.IntrinsicAttributes) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "975586407043-9obkqr9umldo9dq27n3f02ia492fnlkm.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      signInHandler();
    }
  }, [response]);

  const signInHandler = async () => {
    onSignIn(response);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>This is a home for you to save everything you like in one place. Feel free to create shared boards with friends or run it solo permanently</Text>
        <Header style={styles.header}>Uniquely yours</Header>

        <Button
          style={styles.button}
          onPress={() => {
            promptAsync();
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
    justifyContent: "center",
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
    marginTop: 24,
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
