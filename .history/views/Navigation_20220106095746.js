import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon, Button } from "react-native-elements";
import { View, Divider } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors"

const Navigation = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        {props.user !== null && (
          <View style={styles.content}>
            <Button
              buttonStyle={styles.button}
              icon={<Icon name="smile" type="feather" color={Colors.light.secondary} />}
            />
            <TouchableOpacity style={styles.profile}>
              <Image
                style={styles.profile}
                source={{ uri: props.user.profile_picture }}
              />
            </TouchableOpacity>
            <Button
              buttonStyle={styles.button}
              icon={<Icon name="smile" type="feather" color={Colors.light.secondary} />}
            />
          </View>
        )}
        <Divider style={{ marginBottom: 0 }} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 12,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  profile: {
    width: 56,
    height: 56,
    borderRadius: 64,
  },
  button: {
    width: 48,
    height: 48,
    backgroundColor: "transparent"
  }
});

export default Navigation;
