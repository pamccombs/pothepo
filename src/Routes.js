import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login'
import Signup from './screens/Signup'

export default function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
  
    );
  }

  const Stack = createStackNavigator();