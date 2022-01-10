import React from 'react'
import { StyleSheet } from "react-native"
import { View, Text, } from "../components/Themed"

const SendPost = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello wolrd!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "red"
  }
})

export default SendPost