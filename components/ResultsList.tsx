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
  filter,
  navigation,
}: {
  restaurants: Business[];
  filter: string;
  navigation: NavigationProp<ParamListBase>;
}) => {
  const [sortedRestaurants, setSortedRestaurants] =
    useState<Business[]>(restaurants);
  useEffect(() => {
    if (filter) {
      setSortedRestaurants(
        restaurants.filter((restaurant: any) => restaurant.price === filter)
      );
    }
  }, [filter]);
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
                {Math.round(item.distance / 1000)} kms. away
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
