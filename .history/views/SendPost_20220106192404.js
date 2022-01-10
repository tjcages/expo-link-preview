import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";
import { SendButton, TextField } from "../components/Themed";

import { postMessage } from "../api/messages";

const SendPost = (props) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardWillShow", (e) => {
      const paddingBottom = 34;
      const offsest = 12;
      setKeyboardHeight(e.endCoordinates.height - paddingBottom + offsest);
    });
    const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const sendButtonHandler = () => {
    postMessage(props.user, text);
    setText("");
  };

  return (
    <BlurView style={styles.container} intensity={10} tint="light">
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>

      </SafeAreaView>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  button: {
    marginLeft: 12,
  },
});

export default SendPost;
