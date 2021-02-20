import { View } from "react-native";
import React from "react";
import * as Cellular from 'expo-cellular';
export default function CellularDemo(){
    console.log(Cellular.carrier);
    console.log(Cellular.isoCountryCode);

    return (
        <View></View>
    )
}