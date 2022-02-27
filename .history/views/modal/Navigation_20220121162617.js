import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { BlurView } from "expo-blur";
import { View, Divider, Button } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";

const Navigation = (props) => {
  const theme = useColorScheme();
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <BlurView style={[styles.blur]} intensity={50} tint={theme} />
      <View style={styles.blurOverlay} />
      <View style={styles.content}>
        <Button text="Profile" />
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
  blurOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  button: {
    width: 36,
    height: 36,
    padding: 0,
    backgroundColor: "transparent",
  },
});

export default Navigation;
