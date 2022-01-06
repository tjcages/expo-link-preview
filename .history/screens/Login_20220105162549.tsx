import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = (props: JSX.IntrinsicAttributes) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Login Here!</Text>
        <Text>And read some more stuff here</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;
