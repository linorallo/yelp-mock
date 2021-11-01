import React, { useEffect, useState } from "react";
import MapView, { AnimatedRegion, Marker } from "react-native-maps";
import { Business } from "../../types/declarations";
import { checkLocationPermission } from "./permissions/Location";
export default function Map({ results }: { results: Business[] }) {
  useEffect(() => {
    checkLocationPermission();
  }, []);
  useEffect(() => {
    if (Array.isArray(results)) {
      let [sumLongitudes, sumLatitudes] = [0, 0];
      results.forEach((result) => {
        sumLongitudes += result.coordinates.longitude;
        sumLatitudes += result.coordinates.latitude;
      });
      let longitudeDelta =
        Math.max(...results.map((result) => result.coordinates.longitude)) -
        Math.min(...results.map((result) => result.coordinates.longitude));
      let latitudeDelta =
        Math.max(...results.map((result) => result.coordinates.latitude)) -
        Math.min(...results.map((result) => result.coordinates.latitude));
      setMapRegion({
        latitude: sumLatitudes / results.length,
        longitude: sumLongitudes / results.length,
        latitudeDelta: longitudeDelta,
        longitudeDelta: latitudeDelta,
      });
    }
  }, [results]);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0421,
  });
  return (
    <MapView
      style={{ alignSelf: "stretch", marginTop: 15, flex: 1 }}
      region={mapRegion}
      showsCompass={true}
      showsScale={true}
      showsBuildings={true}
      zoomEnabled={true}
      zoomControlEnabled={true}
      showsUserLocation={true}
    >
      {Array.isArray(results) &&
        results.map((location) => {
          return (
            <Marker
              coordinate={{
                latitude: location.coordinates.latitude,
                longitude: location.coordinates.longitude,
              }}
              title={location.name}
              key={location.id}
            />
          );
        })}
    </MapView>
  );
}
