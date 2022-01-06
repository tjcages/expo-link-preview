import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Header } from '../components/Themed';
import { SafeAreaView } from "react-native-safe-area-context";

const Login = (props: JSX.IntrinsicAttributes) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header style={styles.header}>Login Here!</Header>
        <Text>And read some more stuff here</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    paddingBottom: 8
  }
});

export default Login;
