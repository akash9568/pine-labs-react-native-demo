import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

function Userform() {
    let initstate= useState({ name: 'Pariwesh', age: '20', isEnabled: true });  //setState1('Pariwesh');
    console.log(initstate);
    const [state, setState1] = initstate;
    function handlerSave() {
        console.log('going to save', state);

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
        console.log('updating');
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
        fetch('https://601fbe59e3e55e0017f4784b.mockapi.io/users/19', {
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
        <TextInput onChangeText={text => {
            let newState =  {...state, name:text};// Object.assign(state, { name: text });
            console.log(newState);
            setState1(newState)
        }} style={{ borderColor: 'red', width: 300, borderWidth: 2 }}
            value={state.name}></TextInput>
        <TextInput textContentType='emailAddress' onChangeText={text => {
            let newState =  {...state, age:text};// Object.assign(state, { name: text });
           
        //    let newState = Object.assign(state, { age: text });
            console.log(newState);
            setState1(newState)
        }}
            style={{ borderColor: 'red', width: 300, borderWidth: 2 }}
            value={state.age}></TextInput>
        <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e" value={state.isEnabled}
            onValueChange={(value) => setState1({ isEnabled: value })}></Switch>
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
        <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => handlerSave()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
    </View>)
}

export default Userform;

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })