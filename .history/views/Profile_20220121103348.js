import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const Profile = (props) => {
  return (
    <TouchableOpacity style={styles.profile}>
      <Image
        style={styles.profile}
        source={{ uri: props.user.profile_picture }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 56,
    height: 56,
    borderRadius: 64,
  },
})

export default Profile;
