import React from "react";
import { Button, View,Vibration } from "react-native";
const PATTERN = [1* 1000, 2* 1000];
export default function VibrationDemo(){
    return (
        <View>
            <Button title='Vibrate once' onPress={()=> Vibration.vibrate(4*1000)}></Button>
            <Button title='Vibrate with Pattern' onPress={()=> Vibration.vibrate(PATTERN, true)}></Button>
            <Button title='Vibrate Cancel' onPress={()=> Vibration.cancel()}></Button>
        </View>
    )
}