import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = (props: JSX.IntrinsicAttributes) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello!!!!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {

    backgroundColor: "red",
  },
});

export default Login;
