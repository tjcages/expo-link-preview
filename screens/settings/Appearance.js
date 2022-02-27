import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { updateAppTheme } from "../../api/app"

import Colors from "../../constants/Colors";
import {
  useThemeColor,
  View,
  Container,
} from "../../components/Themed";
import BottomSheet from "../shared/BottomSheet";
import List from "./List";

const Appearance = (props) => {
  const container = useThemeColor(
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
          action: () => setSystemTheme("system")
        },
        {
          title: "Dark",
          type: "option",
          action: () => setSystemTheme("dark")
        },
        {
          title: "Light",
          type: "option",
          action: () => setSystemTheme("light")
        },
      ],
    },
  ];

  const setSystemTheme = (theme) => {
    props.updateAppTheme(theme)
    props.navigation.pop(1)
  }

  return (
    <BottomSheet
      onPress={() => props.navigation.pop(1)}
      sheetStyle={{backgroundColor: container}}
    >
      <View style={styles.content}>
        <Container style={styles.overlay} />
        <List sections={settings} />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateAppTheme,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Appearance);