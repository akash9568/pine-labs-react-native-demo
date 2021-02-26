import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, Switch, TextInput } from 'react-native-gesture-handler';
import APIService from '../services/APIService';
import analytics from '@react-native-firebase/analytics';
export default function Userform() {
    const [state, setState] = useState({
        userform: {
            name: 'Pariwesh',
            age: '20',
            isEnabled: true
        },
        users: []
    });  //setState('Pariwesh')

    // (function () {
    //     console.log('calling getUsers');
    //     // if (state.users.length == 0) {
    //     const promise = APIService.getAllUsers();
    //     promise.then(response => response.json())
    //         .then(users => setState({ ...state, users: users }))
    //     promise.catch(error => {
    //         console.log(error)
    //     })
    //     // }
    // })();


    const URL = "https://60393b51d2b9430017d23f48.mockapi.io/api/v1/users";
    function saveUser() {
        //  analytics().logEvent('basket', {
        //     id: 3745092,
        //     item: 'mens grey t-shirt',
        //     description: ['round neck', 'long sleeved'],
        //     size: 'L',
        //   }).then(response=> alert(response));
        const promise = APIService.saveUser(state.userform);
        promise.then(response => response.json()).then(user => {
            state.users.push(user);
            setState({ ...state, users: state.users });
        });
        promise.catch(error => {
            console.log(error); alert(error)
        });
    }
    return (

        <View style={styles.container}>
            <ScrollView >
                <Text>UserForm</Text>
                <TextInput onChangeText={text => {
                    console.log(state, text);
                    setState({ ...state, userform: { name: text } })
                }}
                    style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.userform.name}></TextInput>
                <TextInput onChangeText={text => setState({ ...state, userform: { age: text } })}
                    style={{ borderColor: 'red', width: 300, borderWidth: 2 }} value={state.userform.age}></TextInput>
                {/* <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e" value={state.userform.isEnabled}
                    onValueChange={(value) => setState({ isEnabled: value })}></Switch> */}
                <Button title='Save' onPress={saveUser}></Button>
                <StatusBar style="dark" />
            </ScrollView>
            {/* <FlatList data={state.users} renderItem={item => {
                return <View style={styles.userRow}><Text >{item.item.name}, {item.item.age}</Text>
                    <Button title='Delete' onPress={deleteUser.bind(this, item.item.id, item.index)}></Button>
                </View>
            }}>
            </FlatList> */}
            <ActivityIndicator color="#0000ff" style={styles.container} size="large"></ActivityIndicator>

        </View>
    );
    function deleteUser(id, index) {
        // if (!confirm('Are you sure'))
        //     return;
        const promise = APIService.deleteUser(id);
        promise.then(response => {
            state.users.splice(index, 1);
            setState({
                ...state,
                users: state.users
            })
        })
        promise.catch(error => console.log(error))
    }
}
const styles = StyleSheet.create({
    userRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'yellow',
        borderWidth: 2,
        width: 120,
        // height: 100,
        backgroundColor: '#d2f455'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
