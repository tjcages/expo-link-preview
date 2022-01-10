import React, { useState, useRef } from "react";
import { StyleSheet, Keyboard, KeyboardEvent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, SendButton, TextField, Button } from "../components/Themed";

const SendPost = (props) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const inputAccessoryViewID = "uniqueID";
  const secondTextInput = useRef()
  const [text, setText] = useState("");

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
  }, []);

  function onKeyboardDidShow(e) {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
  }

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
            onSubmitEditing={() => {
              secondTextInput.focus();
            }}
            blurOnSubmit={false}
          />
          <SendButton style={styles.button} />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginLeft: 12,
  },
});

export default SendPost;
