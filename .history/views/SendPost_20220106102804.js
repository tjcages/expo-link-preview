import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextField } from "../components/Themed";

const SendPost = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <TextField
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Text>Hello wolrd!</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
  },
});

export default SendPost;
