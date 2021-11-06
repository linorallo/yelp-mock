import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { colors } from "../../Colors";

export default function FilterButton({
  value,
  setValue,
}: {
  value: string;
  setValue: (term: string) => void;
}) {
  return (
    <TouchableHighlight
      onPress={() => setValue(value)}
      style={{
        backgroundColor: colors.background,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 15,
        width: 55,
        justifyContent: "center",
        alignItems: "center",
      }}
      underlayColor="transparent"
    >
      <Text>{value}</Text>
    </TouchableHighlight>
  );
}
