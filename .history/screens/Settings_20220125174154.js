import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

import { signOut } from "../api/authentication";

import {
  useThemeColor,
  Copy,
  Text,
  Container,
  View,
} from "../components/Themed";
import Navigation from "../views/modal/Navigation";
import List from "./settings/List";

const Settings = (props) => {
  const props = props.route.params
  const [notifications, setNotifications] = useState(true);

  const red = useThemeColor({}, "red");

  const settings = [
    {
      category: "Preferences",
      data: [
        {
          title: "Notifications",
          description: "Receive @ mentions or replies as notifications",
          type: "switch",
          enabled: notifications,
          action: () => setNotifications(!notifications),
        },
        {
          title: "Appearance",
          description: props.theme,
          type: "option",
          action: () => props.navigation.push("Appearance"),
        },
      ],
    },
    {
      category: "Information",
      data: [
        {
          title: "Send feedback",
          type: "option",
          action: () => handleWebLink("https://tylerj.me/works/snippet"),
        },
      ],
    },
    {
      category: "Options",
      data: [
        {
          title: "Logout",
          type: "button",
          color: red,
          action: () => logoutUser(),
        },
      ],
    },
  ];

  function logoutUser() {
    signOut();
    onDismissHandler();
  }

  const onDismissHandler = () => {
    props.navigation.pop(1);
  };

  const handleWebLink = (link) => {
    WebBrowser.openBrowserAsync(link);
  };

  return (
    <Container style={styles.container}>
      <Navigation onDismiss={() => onDismissHandler()} />

      <View style={styles.content}>
        <List sections={settings} />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
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

export default Settings;
