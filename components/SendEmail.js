import React from "react";
import { Button, Vibration, View } from "react-native";
import email from "react-native-email";
import { TextInput } from "react-native-gesture-handler";
export default function SendEmail(){
    function handleEmail(){
        const to = ['pariweshg@gmail.com']; //destination email IDs
        email(to, {
            cc: ['hitesh@gmail.com'],
            bcc:[],
            subject: 'A mail from Pine labs',
            body: 'This is body content'            
        }).then(response=> Vibration.vibrate())
        .catch(error=> alert(error))
    }
    return (<View>
        <TextInput></TextInput>
        <Button title='send Mail' onPress={handleEmail}></Button>
    </View>)
}