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
    if (showImages) {
      console.log("sending image");
    } else {
      postMessage(props.user, text);
      setText("");
    }
  };

  return (
    <BlurView style={styles.container} intensity={100} tint={theme}>
      <View style={styles.content}>
        <TextField
          onChangeText={setText}
          value={text}
          placeholder="Post to wall"
          onSubmitEditing={() => {
            sendButtonHandler();
          }}
          onFocus={() => setIsEditing(true)}
          onEndEditing={() => setIsEditing(false)}
          blurOnSubmit={true}
          multiline
        />
        {text.length > 0 && (
          <SendButton
            style={{ marginLeft: 12 }}
            onPress={() => {
              sendButtonHandler();
            }}
            icon={
              !showImages ? (
                <Icon
                  name="arrow-up"
                  type="feather"
                  color={
                    text === "" ? Colors.light.secondary : Colors.dark.primary
                  }
                />
              ) : (
                <Icon name="plus" type="feather" color={Colors.dark.primary} />
              )
            }
            disabled={(text === "") & !showImages}
          />
        )}
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 16,
    marginBottom: 24,
    borderRadius: 12,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 16,
  },
  button: {
    width: 42,
    height: 42,
    backgroundColor: "transparent",
    marginRight: 8,
  },
});

export default SendPost;
