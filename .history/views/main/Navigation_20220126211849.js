import React from "react";
import { StyleSheet } from "react-native";
import { View, Title, Divider, useThemeColor } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import Profile from "../shared/Profile";

const Navigation = (props) => {
  const secondary = useThemeColor({}, "secondary");

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.content}>
        {props.user !== null && (
          <Profile
            {...props}
            size="large"
            onPress={() => props.navigation.navigate("Settings", { ...props })}
          />
        )}
        <Title>Boards</Title>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {

  },  
  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  button: {
    padding: 0,
    marginRight:8,
    backgroundColor: "transparent",
  },
});

export default Navigation;
