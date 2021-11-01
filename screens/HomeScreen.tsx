import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SearchBar } from "../components/SearchBar";
import yelp from "../api/yelp";
import { Results } from "../components/ResultsList";
import useResults from "../hooks/useResults";
import Button from "../components/utils/Button";
import Map from "../components/utils/Map";
import { Business } from "../types/declarations";
import ResultsContainer from "../components/ResultsContainer";
import ModeSelector from "../components/utils/ModeSelector";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const [searchApi, results, errorMessage] = useResults();
  const [displayMode, setDisplayMode] = useState<"map" | "list">("map");
  useEffect(() => {
    console.log(displayMode);
  }, [displayMode]);
  return (
    <View style={styles.container}>
      <SearchBar onSubmitSearch={searchApi} />
      <View style={styles.modeSelector}>
        <ModeSelector mode={displayMode} setMode={setDisplayMode} />
      </View>
      {results.length !== 0 && displayMode === "map" && (
        <Map results={results} />
      )}
      {results.length !== 0 && displayMode === "list" && (
        <ResultsContainer results={results} navigation={navigation} />
      )}
      {results.length === 0 && <Text>{errorMessage}</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  filterButton: {
    backgroundColor: "#fff",
  },
  modeSelector: {
    position: "absolute",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    zIndex: 10,
  },
});
