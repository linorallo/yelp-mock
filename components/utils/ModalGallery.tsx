import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Image,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
export default function ModalGallery({
  visible,
  setVisible,
  photos,
}: {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  photos: string[];
}) {
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>Images</Text>
          <TouchableHighlight
            onPress={() => {
              setVisible(!visible);
            }}
            underlayColor="transparent"
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="cross" size={30} color="black" style={{}} />
          </TouchableHighlight>
        </View>
        <View style={styles.body}></View>
        <FlatList
          keyExtractor={(url) => url}
          data={photos}
          renderItem={ImageContainer}
        />
      </View>
    </Modal>
  );
}

const ImageContainer = ({ item }: { item: string }) => {
  return (
    <Image
      source={{ uri: item }}
      style={{ height: 300 }}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
