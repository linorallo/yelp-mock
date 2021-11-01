import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "./Colors";
export default function ({
  height = 1,
  color = colors.normal,
}: {
  height?: number | string;
  color?: string;
}) {
  return <View style={{ width: "100%", height, backgroundColor: color }} />;
}
