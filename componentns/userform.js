import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Switch, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

function Userform() {
    const [state, setState] = useState({ name: 'Pariwesh', age: '20', isEnabled: true });  //setState('Pariwesh')
    function handlerSave() {
        console.log('going to save',state);

        fetch('https://601fbe59e3e55e0017f4784b.mockapi.io/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(state)
        })
            .then(response => response.json()).then(json => {
                console.log(json)
            }).catch(error => {
                console.log('failed'); console.log(error)
            })
    }
    function update() {
        console.log('test1222');
        fetch('https://601fbe59e3e55e0017f4784b.mockapi.io/users/2', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: state
        })

            .then(response => response.json()).then(json => {
                console.log(json)
            }).catch(error => {
                console.log('failed'); console.log(error)
            })
    }
    function delete1() {
        fetch('https://601fbe59e3e55e0017f4784b.mockapi.io/users/1', {
            method: 'DELETE',
        })

            .then(response => response.json()).then(json => {
                console.log(json)
            }).catch(error => {
                console.log('failed'); console.log(error)
            })
    }
    function get() {
        fetch('https://601fbe59e3e55e0017f4784b.mockapi.io/users', {
            method: 'GET',
        })

            .then(response => response.json()).then(json => {
                console.log(json)
            }).catch(error => {
                console.log('failed'); console.log(error)
            })
    }
    return (<View>
        <Text>UserForm</Text>
        <TextInput onChangeText={text => setState({ name: text })} style={{ borderColor: 'red', width: 300, borderWidth: 2 }}
            value={state.name}></TextInput>
        <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e" value={state.isEnabled}
            onValueChange={(value) => setState({ isEnabled: value })}></Switch>
        <StatusBar style="dark" />
        <Button title='Save' onPress={() => {
            handlerSave();
        }}>

        </Button>
        <Button title='Delete' onPress={() => {
            delete1();
        }}></Button>
        <Button title='Update' onPress={() => {
            update();
        }}></Button>
        <Button title='get' onPress={() => {
            get();
        }}></Button>
    </View>)
}

export default Userform;