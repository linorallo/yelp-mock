import React, { useEffect, useState } from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";
import { Filter } from "../../../../types/declarations";
import PillButton from "../../Buttons/PillButton";
import CardModal from "../../CardModal";
import { colors } from "../../Colors";
import CheckBox from "../CheckBox";
import SortByFilter from "../CheckBox";
import FilterButton from "./FilterButton";

export default function FilterBar({
  availableFilters,
  setFilters,
}: {
  availableFilters: Filter[];
  setFilters: (
    selectedFilter: { id: string; selectedOption: string }[]
  ) => void;
}) {
  const [filterSelected, setFilterSelected] = useState<string | null>(null);

  const selectedFilterValues = availableFilters.find(
    (filter) => filter.id === filterSelected
  )?.options;
  const [selectedFilterOption, setSelectedFilterOption] = useState<
    { id: string; value: string }[]
  >([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (!modalVisible) {
      setFilterSelected(null);
    }
    console.log(filterSelected);
  }, [modalVisible]);
  useEffect(() => {
    if (filterSelected) {
      setModalVisible(true);
    }
    console.log(filterSelected);
  }, [filterSelected]);
  useEffect(() => {
    console.log("option", selectedFilterOption);
    const newFilters = selectedFilterOption.map((option) => {
      return { id: option.id, selectedOption: option.value };
    });
    setFilters(newFilters);
  }, [selectedFilterOption]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          margin: 10,
          height: 40,
        }}
      >
        {availableFilters.map((filter) => (
          <PillButton
            onPress={() => setFilterSelected(filter.id)}
            key={filter.id}
          >
            <Text style={styles.buttonContent}>{filter.name}</Text>
          </PillButton>
        ))}
      </View>
      <CardModal visible={modalVisible} setVisible={setModalVisible} key="1223">
        {
          //filterSelected === "sort_by" && (
          //<SortByFilter filter="sort_by" setFilter={setFilters()} />
          //)
        }
        {filterSelected &&
          selectedFilterValues?.map((value) => (
            <CheckBox
              option={value}
              filterId={filterSelected}
              selectedOptions={selectedFilterOption}
              setSelectedOptions={setSelectedFilterOption}
              key={value}
            />
          ))}
      </CardModal>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContent: {
    fontSize: 20,
  },
});
