import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function CheckBox({
  option,
  selectedOptions,
  filterId,
  setSelectedOptions,
}: {
  option: string;
  selectedOptions: { id: string; value: string }[];
  filterId: string;
  setSelectedOptions: (
    selectedOptions: { id: string; value: string }[]
  ) => void;
}) {
  const [checked, setChecked] = useState<boolean>(false);
  useEffect(() => {
    if (selectedOptions.find((so) => so.id === filterId)?.value) {
      setChecked(true);
    }
  }, []);
  useEffect(() => {
    if (checked) {
      console.log({ selectedOptions });
      setSelectedOptions(
        selectedOptions
          ? [...selectedOptions, { id: filterId, value: option }]
          : []
      );
    } else {
      setSelectedOptions(
        selectedOptions.filter((item) => item.value !== option)
      );
    }
    console.log(option, checked, selectedOptions);
  }, [checked]);
  return (
    <View>
      <BouncyCheckbox
        text={option ? option : ""}
        textStyle={{ textDecorationLine: "none" }}
        isChecked={checked}
        onPress={() => setChecked(!checked)}
      />
    </View>
  );
}
