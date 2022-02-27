import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const Profile = (props) => {
  const size = props.size == "small" ? 24 : props.size == "large" ? 56 : 48;

  return (
    <TouchableOpacity style={[styles.profile, { width: size, height: size }]}>
      <Image
        style={[styles.profile, { width: size, height: size }]}
        source={{ uri: props.user.profile_picture }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profile: {
    borderRadius: 64,
  },
});

export default Profile;
