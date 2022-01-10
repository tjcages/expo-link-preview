import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View, Text, Header } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Navigation = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]}>
          <View style={styles.content}>
            <TouchableOpacity style={styles.profile}>
              <Image
                style={styles.profile}
                source={{ uri: props.user.profile_picture }}
              />
            </TouchableOpacity>
            <Header>{props.user.first_name}</Header>
          </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
  },
  profile: {
    width: 56,
    height: 56,
    borderRadius: 64,
  },
});

export default Navigation;
