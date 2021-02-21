import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// https://snack.expo.io/@pariwesh121/mapview
export default function MapViewMarkerDemo() {
  const [reports, setReports] = React.useState([
    {
      lat: 29.65,
      lon: -98.43,
    },
  ]);
  fetch('https://enigmatic-reaches-55405.herokuapp.com/reports')
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      setReports( data.reports );
    })
    .catch(console.error);
  function mapMarkers() {
    console.log(reports);
    return reports.map((report) => (
      <Marker
        key={report.id}
        coordinate={{ latitude: report.lat, longitude: report.lon }}
        title={report.location}
        description={report.comments}></Marker>
    ));
  }
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.1,
          longitude: -95.7,
          latitudeDelta: 10,
          longitudeDelta: 45,
        }}
        style={styles.map}>
        {mapMarkers()}
      </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
