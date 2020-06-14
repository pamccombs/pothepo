import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Logo from '../components/Logo'
import Form from '../components/Form'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='grey'
        barStyle='light-content'
      />
      <Logo />
      <Form type="Signup" />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.signupButton}> Login!</Text></TouchableOpacity>
      </View>
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
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
});
