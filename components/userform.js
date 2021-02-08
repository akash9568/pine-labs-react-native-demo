import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView, Switch, TextInput } from 'react-native-gesture-handler';

export default function Userform() {
    console.log(useState({ name: 'Pariwesh', age: '20', isEnabled: true }))
    const [state, setState] = useState({ name: 'Pariwesh', age: '20', isEnabled: true });  //setState('Pariwesh')
    const URL = "https://6020a98046f1e400178034c6.mockapi.io/api/v1/users";
    function saveUser() {
        const promise = fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(state)
        });
        promise.then(response => console.log(response))
    }
    return (
        <View style={styles.container}>
            <ScrollView >
                <Text>UserForm</Text>
                <TextInput onChangeText={text => setState({ ...state, name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.name}></TextInput>
                <TextInput onChangeText={text => setState({ ...state, age: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.age}></TextInput>
                <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e" value={state.isEnabled}
                    onValueChange={(value) => setState({ isEnabled: value })}></Switch>
                <Button title='Save' onPress={saveUser}></Button>
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
