import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Login from './src/screens/Login'
import Signup from './src/screens/Signup'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='grey'
        barStyle='light-content'
      />
      <Signup/>
      {/* <Login/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#ffffff',
    fontSize: 18
  }
});
