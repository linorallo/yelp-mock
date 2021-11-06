import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { colors } from "../Colors";
export default function PillButton({
  children,
  onPress,
  color,
}: {
  children: any;
  onPress: () => void;
  color?: string;
}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="transparent"
      style={{
        backgroundColor: color ? color : colors.background,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
    >
      {children}
    </TouchableHighlight>
  );
}
