import React, { useEffect, useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { Icon, Button } from "react-native-elements";
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
    postMessage(props.user, text);
    setText("");
  };

  return (
    <BlurView
      style={[styles.container, isEditing && { paddingHorizontal: 0 }]}
      intensity={100}
      tint={theme}
    >
      <View style={styles.content}>
        <TextField
          onChangeText={setText}
          value={text}
          placeholder="Post to wall"
          onFocus={() => setIsEditing(true)}
          onEndEditing={() => setIsEditing(false)}
          multiline
        />
        {text.length > 0 && (
          <SendButton
            style={{ marginHorizontal: 24 }}
            onPress={() => {
              sendButtonHandler();
            }}
            icon={
              <Icon
                name="arrow-up"
                type="feather"
                color={
                  text === "" ? Colors.light.secondary : Colors.dark.primary
                }
              />
            }
            disabled={text === ""}
          />
        )}
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    marginBottom: 24,
    borderRadius: 12,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

export default SendPost;
