import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 40, height: 70 }}
        source={require('../images/stock-logo.jpg')}
      />
      <Text style={styles.text}>Welcome to PoThePo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  text: {
    marginVertical: 15,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18
  }
});
