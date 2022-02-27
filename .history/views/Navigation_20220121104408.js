import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon, Button } from "react-native-elements";
import { BlurView } from "expo-blur";
import { View, Divider } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import { signOut } from "../api/authentication";

import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

const Navigation = (props) => {
  const theme = useColorScheme();
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <BlurView
        style={[
          styles.container,
          theme == "dark"
            ? { backgroundColor: Colors.dark.background }
            : { backgroundColor: Colors.light.background },
        ]}
        intensity={100}
        tint={theme}
      />
      {props.user !== null && (
        <View style={styles.content}>
          <Button
            buttonStyle={styles.button}
            icon={
              <Icon name="sun" type="feather" color={Colors.light.secondary} />
            }
          />
          <Button
            buttonStyle={styles.button}
            icon={
              <Icon
                name="log-out"
                type="feather"
                color={Colors.light.secondary}
              />
            }
            onPress={() => signOut()}
          />
        </View>
      )}
      <Divider style={{ marginBottom: 0 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.9,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  button: {
    width: 48,
    height: 48,
    backgroundColor: "transparent",
  },
});

export default Navigation;
