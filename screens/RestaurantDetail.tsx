import { Business, BusinessDetails } from "../types/declarations";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import yelp from "../api/yelp";
import Rating from "../components/utils/Rating";
import BusinessClock from "../components/utils/BusinessClock";
import Reviews from "../components/RestaurantDetails/Reviews";
import Hero from "../components/RestaurantDetails/Hero";
import Dashboard from "../components/RestaurantDetails/Dashboard";
import DividerLine from "../components/utils/DividerLine";
//export default async ({
//  route,
//  navigation,
//}: {
//  route?: any;
//  navigation: NavigationProp<ParamListBase>;
//}) => {};

export const RestaurantDetail = ({
  route,
  navigation,
}: {
  route?: any;
  navigation: NavigationProp<ParamListBase>;
}) => {
  useEffect(() => {}, []);
  const [restaurant, setRestaurant] = React.useState<BusinessDetails | null>(null);
  useEffect(() => {
    yelp
      .get(`/${route.params.item.id}`)
      .then((response: any) => setRestaurant(response.data));
  }, []);
  if (restaurant === null)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <View>
      <Hero restaurant={restaurant} />
      <Dashboard restaurant={restaurant} />

      <DividerLine height={10} />
      <Reviews id={restaurant.id} />
    </View>
  );
};
