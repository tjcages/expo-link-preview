import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View, Text } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Navigation = (props: any) => {
    return (<View style={styles.container}>
      <SafeAreaView edges={["top"]}>
        <Text>Heyyy</Text>
        {props.user !== null && (
          <TouchableOpacity
            style={styles.userProfile}
            ref={props.profileRef}
            onPress={() => props.openMenu(false)}
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
  userProfile: {
    padding: 2,
    borderRadius: 50,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },
})

export default Navigation