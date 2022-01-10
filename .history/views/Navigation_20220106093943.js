import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View, Divider, Header } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Navigation = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]}>
        {props.user !== null && (
          <View style={styles.content}>
            <TouchableOpacity style={styles.profile}>
              <Image
                style={styles.profile}
                source={{ uri: props.user.profile_picture }}
              />
            </TouchableOpacity>
            <Header>{props.user.first_name}</Header>
          </View>
        )}
      </SafeAreaView>
      <Divider lightColor="#ff0000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    width: 56,
    height: 56,
    borderRadius: 64,
    marginBottom: 12,
  },
});

export default Navigation;
