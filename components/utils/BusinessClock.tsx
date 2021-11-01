import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Business, BusinessDetails } from "../../types/declarations";

export default ({ is_closed }: { is_closed: boolean }) => {
  const styles = StyleSheet.create({
    clock_closed: {},
  });
  return (
    <View style={{ flexDirection: "row" }}>
      <FontAwesome5
        name="clock"
        size={24}
        color={is_closed ? "red" : "green"}
      />
      {is_closed ? (
        <Text style={{ color: "red" }}>Business currently closed</Text>
      ) : null}
    </View>
  );
};

export const BusinessHours = ({
  restaurant,
}: {
  restaurant: BusinessDetails;
}) => {
  const parseTime = (time: string) => {
    return time.slice(0, 2) + ":" + time.slice(2, 4);
  };

  const weekDayNumber = new Date().getDay();
  console.log(restaurant.hours);
  const schedule = restaurant.hours.find(
    (item) => item.hours_type === "REGULAR"
  );
  const todaySchedule = schedule?.open.find(
    (item) => item.day == weekDayNumber
  );
  if (!todaySchedule) return <View></View>;
  const start = parseTime(todaySchedule?.start);
  const end = parseTime(todaySchedule?.end);

  return (
    <View>
      <Text style={{ color: "black" }}>
        {start}, {end}
      </Text>
    </View>
  );
};
