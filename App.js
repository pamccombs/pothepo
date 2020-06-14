import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Routes from './src/Routes'


export default function App() {
  return (
    <Routes/>
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
