import React from 'react';
import { StyleSheet } from 'react-native'
import { View, ActivityIndicator } from "../components/Themed"

const LoadingView = (props) => {
  const renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )

  return renderLoading()
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    paddingBottom: 64,
  },
});

export default LoadingView