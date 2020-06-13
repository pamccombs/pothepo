import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Login() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='grey'
          barStyle='light-content'
        />
        <Text style={styles.text}>Login</Text>
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
  