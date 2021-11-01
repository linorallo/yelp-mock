import React from "react";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Platform,
  View,
  Text,
  Image,
} from "react-native";
import yelp from "../../api/yelp";
import { Review } from "../../types/declarations";
import { colors } from "../utils/Colors";
import { FontAwesome } from "@expo/vector-icons";
import DividerLine from "../utils/DividerLine";
import Rating from "../utils/Rating";
import * as Localization from "expo-localization";

export default ({ id }: { id: string }) => {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  useEffect(() => {
    yelp
      .get(`/${id}/reviews`)
      .then((res: any) => {
        setReviews(res.data.reviews);
      })
      .catch((err) => console.log(err));
  }, []);
  if (reviews === null)
    return (
      <ActivityIndicator
        size={Platform.OS === "ios" ? "large" : 50}
        color="red"
      />
    );

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
        Reviews
      </Text>
      <FlatList
        renderItem={Item}
        data={reviews}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={DividerLine}
      />
    </View>
  );
};

const Item = ({ item, index }: { item: Review; index: number }) => {
  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row" }}>
        {item.user.image_url ? (
          <Image
            source={{ uri: item.user.image_url }}
            style={{ width: 30, height: 30, borderRadius: 25 }}
          />
        ) : (
          <FontAwesome name="user-circle-o" size={30} color="gray" />
        )}
        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {item.user.name}
          </Text>
          <Text style={{ color: "gray", fontSize: 12 }}>
            {item.time_created.slice(0, 7)}
          </Text>
        </View>
      </View>
      <Rating rating={item.rating} />
      <View>
        <Text style={{ color: "black" }}>{item.text}</Text>
      </View>
    </View>
  );
};
