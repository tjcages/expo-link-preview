import React from "react";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Icon, Button } from "react-native-elements";
import {
  View,
  Divider,
  Title,
  getTheme,
  useThemeColor,
} from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import Profile from "../shared/Profile";

const Navigation = (props) => {
  const secondary = useThemeColor({}, "primary");

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <BlurView style={[styles.blur]} intensity={50} tint={getTheme()} />
      <View style={styles.blurOverlay} />

      <View style={styles.content}>
        <Button
          buttonStyle={styles.button}
          icon={
            <Icon
              name="chevron-left"
              type="feather"
              color={secondary}
              size={24}
            />
          }
          onPress={() => props.navigation.pop(1)}
        />
        {props.user !== null && (
          <Profile
            {...props}
            size="medium"
            onPress={() => props.navigation.navigate("Settings", { ...props })}
          />
        )}
        <Title style={styles.title}>{props.item.title}</Title>
      </View>
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
    zIndex: 100,
  },
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
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: "transparent",
  },
  button: {
    padding: 0,
    marginRight: 8,
    backgroundColor: "transparent",
  },
  title: {
    marginLeft: 12,
    fontSize: 20,
  },
});

export default Navigation;
