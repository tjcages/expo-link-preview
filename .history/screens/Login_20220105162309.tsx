import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const Login = (props: JSX.IntrinsicAttributes) => {
  return (
      <View style={styles.container}>
        <Text>Hello!!!!</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
});

export default Login;
