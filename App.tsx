import React from "react";
import {
  NavigationContainer,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { RestaurantDetail } from "./screens/RestaurantDetail";

function Home({ navigation }: { navigation: NavigationProp<ParamListBase> }) {
  return <HomeScreen navigation={navigation} />;
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurant Search" component={Home} />
        <Stack.Screen name="Restaurant Details" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
