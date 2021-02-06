import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView, Switch, TextInput } from 'react-native-gesture-handler';

export default function App() {
  const [state, setState] = useState({ name: 'Pariwesh', age: '20', isEnabled: true });  //setState('Pariwesh')

  return (
    <View style={styles.container}>
      <ScrollView >
        <Text>UserForm</Text>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.name}></TextInput>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.age}></TextInput>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.age}></TextInput>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.age}></TextInput>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.age}></TextInput>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.age}></TextInput>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.age}></TextInput>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.age}></TextInput>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.age}></TextInput>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.age}></TextInput>
        <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e" value={state.isEnabled}
          onValueChange={(value) => setState({ isEnabled: value })}></Switch>
        <Button title='Save' onPress={() => {
          console.log('test');
          alert(state);
        }}></Button>
        <StatusBar style="dark" />
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
