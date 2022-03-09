import React from "react";
import { StatusBar, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import bgImg from "../../assets/images/bg.png";
import logoImg from "../../assets/images/logo.png";

import { Button } from "../../components/common";

const Home = () => {
  const { navigate } = useNavigation();

  return (
    <S.Container source={bgImg}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <S.Logo source={logoImg} resizeMode="contain" />
      <View style={{ width: "100%" }}>
        <Button title="Personagens" onPress={() => navigate("Characters")} />
        <Button title="Epsódios" onPress={() => navigate("Episodes")} />
        <Button title="Localizações" onPress={() => navigate("Locations")} />
      </View>
    </S.Container>
  );
};

export default Home;
