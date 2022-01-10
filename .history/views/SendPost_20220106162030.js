import React, { useState } from "react";
import { StyleSheet, InputAccessoryView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, SendButton, TextField, Button } from "../components/Themed";

const SendPost = (props) => {
  const inputAccessoryViewID = "uniqueID";
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <View style={styles.content}>
          <TextField
            onChangeText={setText}
            value={text}
            placeholder="Post to wall"
            keyboardType="twitter"
            inputAccessoryViewID={inputAccessoryViewID}
          />
          <SendButton style={styles.button} />
        </View>
      </SafeAreaView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button
          onPress={() => setText(initialText)}
          title="Clear text"
        />
      </InputAccessoryView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginLeft: 12,
  },
});

export default SendPost;
