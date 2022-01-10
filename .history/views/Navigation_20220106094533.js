import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View, Divider, Header } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Navigation = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={{flex: 1}}>
        {props.user !== null && (
          <View style={styles.content}>
            <TouchableOpacity style={styles.profile}>
              <Image
                style={styles.profile}
                source={{ uri: props.user.profile_picture }}
              />
            </TouchableOpacity>
          </View>
        )}
        <Divider />
      </SafeAreaView>
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
  },
});

export default Navigation;
