import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, SectionList } from "react-native";

import { Copy, Text, Container, View, Divider } from "../components/Themed";
import Navigation from "../views/modal/Navigation";

const ModalScreen = (props) => {
  const settings = [
    {
      category: "Preferences",
      data: [{ title: "Appearance", description: "Dark mode", type: "switch" }],
    },
    {
      category: "Options",
      data: [{ title: "Logout", type: "button" }],
    },
  ];

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
            <Text style={{fontWeight: "600"}}>{category}</Text>
          )}
        />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Container>
  );
};

const Item = ({ item }) => (
  <View style={styles.item}>
    <Copy style={styles.title}>{item.title}</Copy>
    {item.description && <Text style={styles.title}>{item.description}</Text>}
    <Divider />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "transparent",
  },
  item: {
    paddingTop: 8,
    backgroundColor: "transparent",
  },
});

export default ModalScreen;
