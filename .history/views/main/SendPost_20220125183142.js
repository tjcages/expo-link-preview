import React, { createRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { BlurView } from "expo-blur";
import { View, SendButton, TextField } from "../../components/Themed";

import Colors from "../../constants/Colors";

import { postMessage } from "../../api/messages";

const SendPost = (props) => {
  const theme = props.theme
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
      <BlurView style={styles.content} intensity={100} tint={theme}>
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
      </BlurView>
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
  content: {
    flex: 1,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

export default SendPost;
