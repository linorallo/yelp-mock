import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const SearchBar = ({ onSubmitSearch }: { onSubmitSearch: any }) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={styles.inputBox}>
      <AntDesign name="search1" size={28} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.text}
        placeholder="Search"
        value={searchInput}
        onChangeText={(searchInput) => setSearchInput(searchInput)}
        onEndEditing={() => onSubmitSearch(searchInput)}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#F1EEF0",
    width: "90%",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  text: {
    color: "#9A999A",
    marginLeft: 10,
    fontSize: 20,
    width: "100%",
  },
});
