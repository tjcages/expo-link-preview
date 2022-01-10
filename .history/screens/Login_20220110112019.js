import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Header, Button } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import * as Google from "expo-auth-session/providers/google";

import useColorScheme from "../hooks/useColorScheme";
import { onSignIn } from "../api/authentication";

import GoogleIcon from "../assets/icons/google.svg";

const Login = (props) => {
  const theme = useColorScheme();
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
        <Header style={styles.header}>Uniquely yours</Header>

        <Button
          style={styles.button}
          onPress={() => {
            promptAsync();
          }}
          text={"Get started"}
          icon={
            <GoogleIcon
            currentColor={"red"}
              style={[
                theme === "dark" ? { color: "black" } : { color: "white" },
                styles.googleIcon,
              ]}
            />
          }
        />
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
