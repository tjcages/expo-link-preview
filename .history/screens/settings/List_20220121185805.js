import React from "react";
import { StyleSheet, SectionList, TouchableOpacity, Switch } from "react-native";
import { Icon } from "react-native-elements";

import Colors from "../../constants/Colors";
import {
  useThemeColor,
  Copy,
  Text,
  View,
} from "../../components/Themed";

const List = (props) => {
  return (
    <SectionList
      sections={props.sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => {
        return <Item item={item} />;
      }}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section: { category } }) => (
        <Text style={{ fontWeight: "600", marginTop: 24, marginBottom: 8 }}>
          {category}
        </Text>
      )}
    />
  );
};

const Item = ({ item }) => {
  const primary = useThemeColor({}, "primary");
  const secondary = useThemeColor({}, "secondary");
  const container = useThemeColor(
    { light: Colors.light.background, dark: Colors.dark.highlight },
    "highlight"
  );

  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: container }]}
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
          trackColor={{ false: container, true: Colors.default.green }}
          thumbColor={"white"}
          ios_backgroundColor={{ false: secondary, true: Colors.default.green }}
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

export default List;
