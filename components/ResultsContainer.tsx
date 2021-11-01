import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "./utils/Colors";
import { Business } from "../types/declarations";
import { Results } from "./ResultsList";
import Button from "./utils/Button";
import { NavigationProp, ParamListBase } from "@react-navigation/core";

export default ({
  results,
  navigation,
}: {
  results: Business[];
  navigation: NavigationProp<ParamListBase>;
}) => {
  const [filter, setFilter] = useState("");
  return (
    <View style={styles.card}>
      <View style={styles.filterButtons}>
        {["$", "$$", "$$$", "$$$$"].map((level) => (
          <Button
            title={level}
            onPress={() => setFilter(level)}
            color={styles.filterButton.backgroundColor}
            textColorProp={styles.filterButton.color}
            key={level}
          />
        ))}
      </View>

      <Results restaurants={results} filter={filter} navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  card: {
    width: "100%",
    paddingHorizontal: 15,
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  filterButton: {
    backgroundColor: colors.primary,
    color: colors.black,
  },
});
