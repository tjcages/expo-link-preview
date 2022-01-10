import React, { useEffect, useState } from "react";
import { StyleSheet, Keyboard } from "react-native";
import { Icon, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";
import { SendButton, TextField } from "../components/Themed";

import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

import { postMessage } from "../api/messages";

const SendPost = (props) => {
  const theme = useColorScheme();
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
    <BlurView style={styles.container} intensity={100} tint={theme}>
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <Animatable.View
          style={[styles.content, { marginBottom: keyboardHeight }]}
          transition="marginBottom"
          duration={400}
          easing="ease-out-cubic"
        >
          <TextField
            onChangeText={setText}
            value={text}
            placeholder="Post to wall"
            keyboardType="twitter"
            onSubmitEditing={() => {
              sendButtonHandler();
            }}
            blurOnSubmit={false}
            multiline
            icon={
              text.length <= 15 && (
                <Button
                  buttonStyle={styles.button}
                  icon={
                    <Icon
                      name="image"
                      type="feather"
                      color={Colors.light.secondary}
                    />
                  }
                />
              )
            }
          />
          <SendButton
            style={styles.sendButton}
            onPress={() => {
              sendButtonHandler();
            }}
            disabled={text === ""}
          />
        </Animatable.View>
      </SafeAreaView>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sendButton: {
    marginLeft: 12,
  },
  button: {
    width: 48,
    height: 48,
    backgroundColor: "transparent",
  },
});

export default SendPost;
