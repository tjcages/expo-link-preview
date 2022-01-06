import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View, Header, Button } from '../components/Themed';

import { signOut } from "../api/authentication"

export default function Home() {
  return (
    <View style={styles.container}>
    <Header style={styles.title}>HOME!!!!</Header>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <Button onPress={() => signOut()}>
      <Text style={styles.text}>Log out</Text>
    </Button>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 24
  },
  text: {
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});