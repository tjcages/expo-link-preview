import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from "../components/Themed"

const Indicator = () => {
  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 12,
    height: 12,
    borderRadius: 24,
    
  }
})

export default Indicator