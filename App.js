import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SMS1 from "./components/SMS";
import LocationComponent from "./components/Location";
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView >
        <LocationComponent></LocationComponent>
        {/* <FingerPrint></FingerPrint> */}
        {/* <Userform></Userform> */}
        {/* <ContactList></ContactList> */}
        <SMS1></SMS1>
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
