import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView, Switch, TextInput } from 'react-native-gesture-handler';
import Userform from './components/userform';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView >
        <Userform></Userform>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
