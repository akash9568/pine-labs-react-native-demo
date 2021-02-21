import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SMS1 from "./components/SMS";
import LocationComponent from "./components/Location";
import FingerPrint from './components/fingerpring-auth';
import CellularDemo from './components/CelluarDemo';
import SqliteDemo from './components/SqliteDemo';
import MapView from 'react-native-maps';
import SendEmail from './components/SendEmail';
import VibrationComponent from './components/vibrationDemo';

// import { Dimensions } from 'Dimensions';
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView >
        {/* <LocationComponent></LocationComponent> */}
        {/* <FingerPrint></FingerPrint> */}
        {/* <Userform></Userform> */}
        {/* <ContactList></ContactList> */}
        {/* <SMS1></SMS1> */}
        {/* <CellularDemo></CellularDemo> */}
        {/* <SqliteDemo></SqliteDemo> */}
        {/* <MapView style={styles.map}  /> */}
        {/* <SendEmail></SendEmail> */}
        <VibrationComponent></VibrationComponent>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: 300,//Dimensions.get('window').width,
    height:500,// Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
