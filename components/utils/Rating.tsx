import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "./Colors";
export default ({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount?: number;
}) => {
  const styles = StyleSheet.create({
    reviewCount: {
      color: colors.white,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 4,
      marginLeft: 5,
    },
  });
  return (
    <View style={{ flexDirection: "row" }}>
      {[...Array(5)].map((_, i) => (
        <RatingStar key={i} activated={i < rating} />
      ))}
      {reviewCount && <Text style={styles.reviewCount}>{reviewCount}</Text>}
    </View>
  );
};

const RatingStar = ({ activated }: { activated: boolean }) => {
  const styles = StyleSheet.create({
    star: {
      borderRadius: 15,
    },
  });
  return (
    <View style={styles.star}>
      <FontAwesome name="star" size={24} color={activated ? "#f22" : "#ccc"} />
    </View>
  );
};
