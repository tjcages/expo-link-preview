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
      <View style={styles.interativeContent}>
        <Animatable.View
          style={[styles.content]}
          transition="marginBottom"
          duration={400}
          easing="ease-out-cubic"
        >
          <TextField
            onChangeText={setText}
            value={text}
            placeholder="Post to wall"
            onSubmitEditing={() => {
              sendButtonHandler();
            }}
            onFocus={() => {
              console.log("Focusing")
            }}
            onEndEditing={() => console.log("ended!")}
            blurOnSubmit={true}
            multiline
          />
          {
            text.length > 0 &&
          <SendButton
            style={styles.sendButton}
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
          }
        </Animatable.View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 16,
  },
  interativeContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  sendButton: {
    marginLeft: 12,
  },
  button: {
    width: 42,
    height: 42,
    backgroundColor: "transparent",
    marginRight: 8,
  },
});

export default SendPost;
