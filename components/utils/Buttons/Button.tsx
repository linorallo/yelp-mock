import React from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
export default function Button({
  title,
  onPress,
  color,
  textColorProp,
}: {
  title: string;
  onPress: (term: string) => void;
  color?: string;
  textColorProp: string;
}) {
  const styles = StyleSheet.create({
    Button: {
      backgroundColor: !color ? "#DDDDDD" : color,
      margin: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
    },
    ButtonText: {
      color: !textColorProp ? "#DDDDDD" : textColorProp,
    },
  });

  return (
    <TouchableHighlight
      onPress={() => onPress("$")}
      underlayColor="transparent"
    >
      <View style={styles.Button}>
        <Text style={styles.ButtonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}
