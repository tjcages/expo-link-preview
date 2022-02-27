import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import colors from "../../../assets/colors"

const LoadingView = (props) => {
  const renderLoading = () => (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={colors.offWhite} />
    </View>
  )

  return renderLoading()
}

const styles = StyleSheet.create({
  loading: {
    height: "100%",
    justifyContent: "center",
    paddingBottom: 64,
    backgroundColor: colors.background
  },
});

export default LoadingView