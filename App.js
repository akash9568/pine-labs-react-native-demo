import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView, Switch, TextInput } from 'react-native-gesture-handler';
import ContactList from './components/contactList';
import Userform from './components/userform';
import SMS1 from "./components/SMS";
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView >
        {/* <Userform></Userform> */}
        {/* <ContactList></ContactList> */}
        <SMS1></SMS1>
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
