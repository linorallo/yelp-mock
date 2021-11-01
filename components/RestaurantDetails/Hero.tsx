import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { Business, BusinessDetails } from "../../types/declarations";
import BusinessClock from "../utils/BusinessClock";
import { colors } from "../utils/Colors";
import Rating from "../utils/Rating";

export default function Hero({ restaurant }: { restaurant: BusinessDetails }) {
  return (
    <TouchableHighlight style={styles.container}>
      <Image style={styles.heroImage} source={{ uri: restaurant.image_url }} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          height: "30%",
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      />
      <View style={styles.infoPanel}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <View>
          <Rating
            rating={restaurant.rating}
            reviewCount={restaurant.review_count}
          />
        </View>
        <View style={styles.seeAll}>
          <Text style={{ color: colors.white, fontWeight: "700" }}>
            See All {restaurant.photos.length}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  infoPanel: {
    justifyContent: "flex-end",
    height: "100%",
    padding: 10,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.white,
  },
  heroImage: {
    width: "100%",
    height: 200,
    position: "absolute",
    flex: 0,
  },
  seeAll: {
    backgroundColor: "rgba(252, 252, 252, 0.2)",
    maxWidth: 70,
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
  },
});
