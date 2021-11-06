import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight,
} from "react-native";
import { Business } from "../types/declarations";
import { colors } from "./utils/Colors";
import Rating from "./utils/Rating";

export const Results = ({
  restaurants,
  filters,
  navigation,
}: {
  restaurants: Business[];
  filters: { id: string; selectedOption: string }[];
  navigation: NavigationProp<ParamListBase>;
}) => {
  const [sortedRestaurants, setSortedRestaurants] =
    useState<Business[]>(restaurants);
  useEffect(() => {
    if (filters.length > 0) {
      let filteredRestaurants = restaurants;
      const filterBy = filters.find((filter) => filter.id === "sort_by");
      filters.forEach((filter) => {
        if (filter.id === "price") {
          filteredRestaurants = filteredRestaurants.filter(
            (restaurant) => restaurant.price === filter.selectedOption
          );
          if (filterBy) {
            filteredRestaurants = filteredRestaurants.sort(
              (a, b) => a.price.length - b.price.length
            );
          }
        } else if (filter.id === "rating") {
          filteredRestaurants = filteredRestaurants.filter(
            (restaurant) => restaurant.rating === Number(filter.selectedOption)
          );
          if (filterBy) {
            filteredRestaurants = filteredRestaurants.sort(
              (a, b) => a.rating - b.rating
            );
          }
        }
      });

      setSortedRestaurants(filteredRestaurants);
    }
  }, [filters]);
  const Item = ({ item }: { item: Business }) => {
    return (
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate("Restaurant Details", { item })}
          underlayColor="transparent"
        >
          <View style={styles.ListItem}>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text style={styles.ListItemTitle}>{item.name}</Text>

              <Text style={{ color: colors.normal }}>
                {Math.round(item.distance / 1000) === 0
                  ? ` ${Math.round(item.distance / 1000)} kms. away`
                  : `${Math.round(item.distance)} mts. away`}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Rating rating={item.rating} reviewCount={item.review_count} />
                <Text style={{ flexWrap: "wrap", color: colors.normal }}>
                  {item.categories.map((category, index) => (
                    <Text key={index}>
                      {category.title}
                      {index !== item.categories.length - 1 ? ", " : null}
                    </Text>
                  ))}
                </Text>
                <Text style={{ flexWrap: "wrap", color: colors.normal }}>
                  {item.location.address1}, {item.location.city}
                </Text>
              </View>
              {!!item.image_url && (
                <Image
                  source={{ uri: item.image_url }}
                  style={{
                    alignSelf: "stretch",
                    flex: 1,
                  }}
                />
              )}
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={sortedRestaurants}
        renderItem={Item}
        keyExtractor={(item) => item.id}
        style={styles.List}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  List: {
    marginVertical: 15,
    width: "100%",
  },
  ListItem: {
    justifyContent: "flex-start",
    width: "100%",
    height: 150,
  },
  ListItemTitle: {
    fontSize: 20,
    justifyContent: "flex-start",

    fontWeight: "700",
  },
});
