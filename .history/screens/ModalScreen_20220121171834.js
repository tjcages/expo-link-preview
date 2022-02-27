import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, SectionList, Switch } from "react-native";
import { Icon } from "react-native-elements";
import { useThemeColor } from "../components/Themed";

import { Copy, Text, Container, View } from "../components/Themed";
import Navigation from "../views/modal/Navigation";

const ModalScreen = (props) => {
  const red = useThemeColor({}, "red");

  const [settings, setSettings] = useState([
    {
      category: "Preferences",
      data: [{ title: "Appearance", description: "Dark mode", type: "switch" }],
    },
    {
      category: "Information",
      data: [{ title: "Send feedback", type: "option" }],
    },
    {
      category: "Options",
      data: [{ title: "Logout", type: "button", color: red }],
    },
  ]);

  const onDismissHandler = () => {
    props.navigation.pop(1);
  };

  return (
    <Container style={styles.container}>
      <Navigation onDismiss={() => onDismissHandler()} />

      <View style={styles.content}>
        <SectionList
          sections={settings}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item item={item} />}
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

const Item = ({ item }) => {
  const secondary = useThemeColor({}, "secondary");
  return (
    <View style={styles.item}>
      <View>
        <Copy style={item.color && { color: item.color }}>{item.title}</Copy>
        {item.description && (
          <Text style={{ marginTop: 8 }}>{item.description}</Text>
        )}
      </View>
      {item.type === "option" && (
        <Icon name="chevron-right" type="feather" size={20} color={secondary} />
      )}
      {item.type === "switch" && (
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      )}
    </View>
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
    borderRadius: 8,
  },
});

export default ModalScreen;
