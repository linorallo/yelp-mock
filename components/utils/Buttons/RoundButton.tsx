import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../Colors";
export default function RoundButton({ children, size, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: "#dee2e6",
        borderRadius: 100,
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>{children}</View>
    </TouchableOpacity>
  );
}
