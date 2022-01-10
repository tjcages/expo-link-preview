import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View, Text } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Navigation = (props) => {
    return (<View style={styles.container}>
      <SafeAreaView edges={["top"]}>
        {props.user !== null && (
          <TouchableOpacity
            style={styles.profile}
          >
            <Image
              style={styles.profile}
              source={{ uri: props.user.profile_picture }}
            />
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 12,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },
})

export default Navigation