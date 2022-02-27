import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native'
import { View } from "../components/Themed"

const LoadingView = (props) => {
  const renderLoading = () => (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={"red"} />
    </View>
  )

  return renderLoading()
}

const styles = StyleSheet.create({
  loading: {
    height: "100%",
    justifyContent: "center",
    paddingBottom: 64,
  },
});

export default LoadingView