import React, { createRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { BlurView } from "expo-blur";
import { View, SendButton, TextField, getTheme } from "../../components/Themed";

import Colors from "../../constants/Colors";

import { postMessage } from "../../api/messages";

const SendPost = (props) => {
  const messageRef = createRef();
  const [text, setText] = useState("");

  const sendButtonHandler = () => {
    if (text === "") {
      messageRef.current.focus();
      return;
    } // prevent blank messages from being sent
    postMessage(props.user, text);
    messageRef.current.blur();
    setText("");
  };

  return (
    <View style={styles.container}>
      <BlurView style={styles.blur} intensity={50} tint={getTheme()}/>
      <View style={styles.blurOverlay} />
      <View style={styles.content}>
        <TextField
          fieldRef={messageRef}
          onChangeText={setText}
          value={text}
          placeholder="Post to wall"
          multiline
        />
        <SendButton
          style={{ marginLeft: 12, marginRight: 8 }}
          onPress={() => {
            sendButtonHandler();
          }}
          pointerEvents="none"
          icon={
            <Icon
              name="arrow-up"
              type="feather"
              color={text === "" ? Colors.light.secondary : Colors.dark.primary}
            />
          }
          disabledTheme={text === ""}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  blurOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  content: {
    flex: 1,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

export default SendPost;
