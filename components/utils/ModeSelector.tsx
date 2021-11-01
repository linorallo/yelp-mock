import React from "react";
import { TouchableHighlight, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../utils/Colors";

export default ({
  mode,
  setMode,
}: {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<"map" | "list">>;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "30%",
        height: 40,
        justifyContent: "space-evenly",
        borderRadius: 20,
        borderColor: "#FCB9A4",
        borderWidth: 0,
        backgroundColor: "white",
        marginVertical: 10,
      }}
    >
      <TouchableHighlight
        onPress={() => setMode("map")}
        underlayColor="transparent"
        style={{ width: "50%" }}
      >
        <View
          style={{
            ...styles.button,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            backgroundColor: mode === "map" ? colors.accent : colors.secondary,
          }}
        >
          <Feather name="map" size={24} color="black" />
        </View>
      </TouchableHighlight>
      <View style={styles.verticalLine} />
      <TouchableHighlight
        onPress={() => setMode("list")}
        underlayColor="transparent"
        style={{ width: "50%" }}
      >
        <View
          style={{
            ...styles.button,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: mode === "list" ? colors.accent : colors.secondary,
          }}
        >
          <Feather name="list" size={24} color="black" />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  verticalLine: {
    height: "100%",
    width: 2,
    backgroundColor: "#909090",
    margin: 0,
    padding: 0,
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FCB9A4",
  },
  rightButton: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
