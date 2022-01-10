import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, SendButton, TextField } from "../components/Themed";

const SendPost = (props) => {
  const [text, setText] = useState("")

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <View style={styles.content}>
        <TextField
          onChangeText={setText}
          value={text}
          placeholder="Post to wall"
          keyboardType="twitter"
        />
        <SendButton style={styles.button}/>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginLeft: 12,
  }
});

export default SendPost;
