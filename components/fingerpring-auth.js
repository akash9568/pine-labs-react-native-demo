import * as LocalAuthentication from 'expo-local-authentication';
import React from 'react';
import { Text, View } from 'react-native';
export default function FingerPrint() {
    const success = response=>{
        console.log(response);
        //next step
    };
    const error = response=>{
        console.log('error happened=', response);
    };
    const promise = LocalAuthentication.hasHardwareAsync();
    promise.then(response=> {
        console.log(response);
    });
    LocalAuthentication.supportedAuthenticationTypesAsync().then(success)
    .catch(success)
    LocalAuthentication.authenticateAsync({
        cancelLabel: 'Cancel me',
        fallbackLabel: 'Fallback'
    }).then(success).catch(error)
    return(
        <View><Text>Test</Text></View>
    )
}