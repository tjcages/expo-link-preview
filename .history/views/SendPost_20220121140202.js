import React, { useEffect, useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { Icon, Button } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";
import { SendButton, TextField } from "../components/Themed";

import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

import { postMessage } from "../api/messages";

import Images from "./Images";

const SendPost = (props) => {
  const theme = useColorScheme();
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const sendButtonHandler = () => {
    if (text === "") {
      this.refs.message.focus();
      return;
    } // prevent blank messages from being sent
    postMessage(props.user, text);
    setText("");
  };

  return (
    <Animatable.View
      style={[
        styles.container,
        theme == "dark"
          ? { borderColor: Colors.dark.divider }
          : { borderColor: Colors.light.divider },
      ]}
      transition="paddingHorizontal"
      duration={400}
      easing="ease-out-cubic"
    >
      <BlurView style={styles.content} intensity={100} tint={theme}>
        <TextField
          ref="message"
          onChangeText={setText}
          value={text}
          placeholder="Post to wall"
          onFocus={() => setIsEditing(true)}
          onEndEditing={() => setIsEditing(false)}
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
        />
      </BlurView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
