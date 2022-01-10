import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextField } from "../components/Themed";

const SendPost = (props) => {
  const [text, setText] = useState("")

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <View style={styles.content}>
        <TextField
          onChangeText={setText}
          value={text}
          placeholder="useless placeholder"
          keyboardType="twitter"
        />
        <Text>Hello wolrd!</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
  }
});

export default SendPost;
