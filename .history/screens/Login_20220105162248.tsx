import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

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
    flex: 1,
  },
});

export default Login;
