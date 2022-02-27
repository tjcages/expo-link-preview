import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  SectionList,
  Switch,
} from "react-native";
import { Icon } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";

import { signOut } from "../api/authentication";

import Colors from "../constants/Colors";
import { useThemeColor } from "../components/Themed";

import { Copy, Text, Container, View } from "../components/Themed";
import Navigation from "../views/modal/Navigation";

const Appearance = (props) => {
  const [notifications, setNotifications] = useState(true);

  const red = useThemeColor({}, "red");
  const background = useThemeColor(
    { lightColor: Colors.light.container, darkColor: Colors.light.container },
    "container"
  );
  const container = useThemeColor(
    { lightColor: Colors.light.background, darkColor: Colors.light.container },
    "container"
  );

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
          description: "Dark mode",
          type: "option",
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
    <Container style={[styles.container, { backgroundColor: background }]}>
      <Navigation background={container} onDismiss={() => onDismissHandler()} />

      <View style={styles.content}>
        <SectionList
          sections={settings}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index }) => {
            return <Item background={container} item={item} />;
          }}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section: { category } }) => (
            <Text style={{ fontWeight: "600", marginTop: 24, marginBottom: 8 }}>
              {category}
            </Text>
          )}
        />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Container>
  );
};

const Item = ({ item, background, last }) => {
  const primary = useThemeColor({}, "primary");
  const secondary = useThemeColor({}, "secondary");
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: background }]}
      onPress={() => {
        if (item.action) {
          item.action();
        }
      }}
    >
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          backgroundColor: "transparent",
        }}
      >
        <Copy style={item.color && { color: item.color }}>{item.title}</Copy>
        {item.description && (
          <Text style={{ marginTop: 8, flex: 1, flexWrap: "wrap" }}>
            {item.description}
          </Text>
        )}
      </View>
      {item.type === "option" && (
        <Icon name="chevron-right" type="feather" size={20} color={secondary} />
      )}
      {item.type === "switch" && (
        <Switch
          trackColor={{ false: secondary, true: Colors.default.green }}
          thumbColor={primary}
          ios_backgroundColor="#3e3e3e"
          onChange={() => item.action()}
          value={item.enabled}
        />
      )}
    </TouchableOpacity>
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

export default Appearance;
