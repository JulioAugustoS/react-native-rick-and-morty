import React from "react";
import { View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/common";

const Episodes = () => {
  const { navigate } = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: getStatusBarHeight(true),
        paddingHorizontal: 16,
        backgroundColor: "red",
      }}
    >
      <Button title="Personagens" onPress={() => navigate("Characters")} />
    </View>
  );
};

export default Episodes;
