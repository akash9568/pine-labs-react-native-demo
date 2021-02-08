import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView, Switch, TextInput } from 'react-native-gesture-handler';

export default function Userform() {
    const [state, setState] = useState({
        userform:{name: 'Pariwesh', age: '20', isEnabled: true},
        users: [{ name: 'ajay' }]
    });  //setState('Pariwesh')
    const URL = "https://6020a98046f1e400178034c6.mockapi.io/api/v1/users";
    function saveUser() {
        const promise = fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(state.userform)
        });
        promise.then(response => response.json()).then(user => {
            console.log(user);
            state.users.push(user);
            setState({...state, users: state.users});
        });
        promise.catch(error => alert('Save operation failed'));
    }
    return (
        <View style={styles.container}>
            <ScrollView >
                <Text>UserForm</Text>
                <TextInput onChangeText={text => setState({ ...state.userform, name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.userform.name}></TextInput>
                <TextInput onChangeText={text => setState({ ...state.userform, age: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.userform.age}></TextInput>
                {/* <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e" value={state.userform.isEnabled}
                    onValueChange={(value) => setState({ isEnabled: value })}></Switch> */}
                <Button title='Save' onPress={saveUser}></Button>
                <StatusBar style="dark" />
                <ScrollView>{state.users.map((user, index) => {
                    return <View style={styles.userRow}><Text>{user.name}</Text>
                    </View>
                })}</ScrollView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    userRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'yellow',
        borderWidth: 2,
        backgroundColor: '#d2f455'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
