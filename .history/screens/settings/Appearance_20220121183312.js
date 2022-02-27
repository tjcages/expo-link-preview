import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, SectionList } from "react-native";

import Colors from "../../constants/Colors";
import {
  useThemeColor,
  Copy,
  Text,
  Container,
  View,
} from "../../components/Themed";
import BottomSheet from "../shared/BottomSheet";
import List from "./List";

const Appearance = (props) => {
  const background = useThemeColor(
    { lightColor: Colors.light.container, darkColor: Colors.light.container },
    "container"
  );

  const settings = [
    {
      category: "Appearance",
      data: [
        {
          title: "System",
          description: "Match your iOS appearance",
          type: "option",
        },
        {
          title: "Dark",
          type: "option",
        },
        {
          title: "Light",
          type: "option",
        },
      ],
    },
  ];

  return (
    <BottomSheet
      style={{ backgroundColor: background }}
      onPress={() => props.navigation.pop(1)}
    >
      <View style={styles.content}>
        <List sections={settings} />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
});

export default Appearance;
