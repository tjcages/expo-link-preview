import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, SectionList } from "react-native";

import { Text, Container, View } from "../components/Themed";
import Navigation from "../views/modal/Navigation";

const ModalScreen = (props) => {
  const settings = [
    {
      category: "Preferences",
      data: [{ title: "Appearance", type: "switch" }],
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

      <Container style={styles.content}>
        <SectionList
          sections={settings}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item.title} />}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section: { category } }) => (
            <Text style={styles.header}>{category}</Text>
          )}
        />
      </Container>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Container>
  );
};

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
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
});

export default ModalScreen;
