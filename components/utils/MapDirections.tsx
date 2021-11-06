import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

export default function MapDirections({
  destination,
  mapRegion,
}: {
  destination: { longitude: number; latitude: number };
  mapRegion: {
    longitude: number;
    latitude: number;
    longitudeDelta: number;
    latitudeDelta: number;
  };
}) {
  return (
    <MapView region={mapRegion} showsUserLocation={true}>
      <Marker coordinate={destination} />
    </MapView>
  );
}
