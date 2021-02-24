import  React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

export default function MapViewMarker() {
    const [reports, setReports] = useState([
        {
            lat: 30, long: -98.33
        }
    ])

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
        <MapView initialRegion={{
            latitude: 37.1,
            longitude: -95.7,
            latitudeDelta: 10,
            longitudeDelta: 45,
        }}>{mapMarkers()}</MapView>
    )
}