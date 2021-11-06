import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
} from "react-native";
import { Business, BusinessDetails } from "../../types/declarations";
import RoundButton from "../utils/Buttons/RoundButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BusinessClock, { BusinessHours } from "../utils/BusinessClock";
export default ({ restaurant }: { restaurant: BusinessDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoPanel}>
        <Text style={{ fontWeight: "bold" }}>
          {restaurant.price} |{" "}
          {restaurant.categories.map((category) => category.title).join(", ")}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <BusinessClock is_closed={restaurant.is_closed} />
          <Text style={{ fontWeight: "bold", marginLeft: 10 }}>| </Text>
          <BusinessHours restaurant={restaurant} />
        </View>
      </View>
      <View style={styles.actions}>
        {restaurant.phone && (
          <RoundButton
            size={60}
            onPress={() => Linking.openURL(`tel:${restaurant.phone}`)}
          >
            <MaterialCommunityIcons
              name="phone-in-talk-outline"
              size={35}
              color="black"
            />
          </RoundButton>
        )}
        {restaurant.coordinates && (
          <RoundButton
            size={60}
            onPress={() => {
              Linking.openURL(
                `https://maps.google.com/?q=${restaurant.coordinates.latitude},${restaurant.coordinates.longitude}`
              );
            }}
          >
            <MaterialCommunityIcons
              name="map-outline"
              size={35}
              color="black"
            />
          </RoundButton>
        )}
        {restaurant.url && (
          <RoundButton
            size={60}
            onPress={() => Linking.openURL(restaurant.url)}
          >
            <MaterialCommunityIcons name="web" size={35} color="black" />
          </RoundButton>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    padding: 10,
  },
  infoPanel: {
    flexDirection: "column",
    fontWeight: "bold",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },
});
