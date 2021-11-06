import React from "react";
import { Text, View, Modal, TouchableHighlight } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "./Colors";
export default function CardModal({
  children,
  visible,
  setVisible,
}: {
  children: any;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      style={{ backgroundColor: "red", position: "absolute" }}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <View
        style={{
          backgroundColor: colors.white,
          position: "absolute",
          bottom: 0,
          width: "100%",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <TouchableHighlight
            underlayColor="transparent"
            style={{ marginRight: 20, marginTop: 20 }}
            onPress={() => setVisible(false)}
          >
            <Entypo name="cross" size={30} color="black" />
          </TouchableHighlight>
        </View>
        <View style={{ padding: 30 }}>{children}</View>

        <TouchableHighlight
          underlayColor="transparent"
          style={{
            marginHorizontal: 80,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.accent,
            paddingVertical: 15,
            marginBottom: 30,
          }}
          onPress={() => setVisible(false)}
        >
          <Text>Apply</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );
}
