import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon, Button } from "react-native-elements";
import { BlurView } from "expo-blur";
import { View, Divider } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import { signOut } from "../api/authentication";

import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

import Profile from "../view/Profile"

const Navigation = (props) => {
  const theme = useColorScheme();
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <BlurView style={[styles.blur]} intensity={100} tint={theme} />
      {props.user !== null && (
        <View style={styles.content}>
          <Profile {...props} />
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
  container: { flex: 1 },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
