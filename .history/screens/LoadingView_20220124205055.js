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
    flex: 1,
    justifyContent: "center",
    paddingBottom: 64,
    backgroundColor: "red"
  },
});

export default LoadingView