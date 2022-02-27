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
    <BlurView
      style={[
        styles.container,
        theme == "dark"
          ? { backgroundColor: Colors.dark.background }
          : { backgroundColor: Colors.light.background },
      ]}
      intensity={100}
      tint={theme}
    >
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        {props.user !== null && (
          <View style={styles.content}>
            <Button
              buttonStyle={styles.button}
              icon={
                <Icon
                  name="sun"
                  type="feather"
                  color={Colors.light.secondary}
                />
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
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 12,
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
