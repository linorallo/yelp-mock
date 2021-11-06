import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "./utils/Colors";
import { Business, Filter } from "../types/declarations";
import { Results } from "./ResultsList";
import Button from "./utils/Buttons/Button";
import { NavigationProp, ParamListBase } from "@react-navigation/core";
import FilterBar from "./utils/Filters/filterBar/FilterBar";

export default ({
  results,
  navigation,
}: {
  results: Business[];
  navigation: NavigationProp<ParamListBase>;
}) => {
  const [filter, setFilter] = useState<
    { id: string; selectedOption: string }[]
  >([]);
  const availableFilters: Filter[] = [
    {
      id: "sort_by",
      name: "Sort By",
      options: ["Distance", "Rating", "Price"],
    },
    { id: "price", name: "Price", options: ["$", "$$", "$$$", "$$$$"] },
    { id: "rating", name: "Rating", options: ["1", "2", "3", "4", "5"] },
  ];
  return (
    <View style={styles.card}>
      <View style={styles.filterButtons}>
        <FilterBar availableFilters={availableFilters} setFilters={setFilter} />
      </View>
      {
        //  [ "$", "$$", "$$$", "$$$$" ].map((level) => (
        //  <Button
        //    title={level}
        //    onPress={() => setFilter(level)}
        //    color={styles.filterButton.backgroundColor}
        //    textColorProp={styles.filterButton.color}
        //    key={level}
        //  />
        //))
      }

      <Results restaurants={results} filters={filter} navigation={navigation} />
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
