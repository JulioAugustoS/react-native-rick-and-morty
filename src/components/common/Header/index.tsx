import React from "react";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

const Header = () => {
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <S.Left onPress={() => goBack()}>
        <Icon name="arrow-left" color="#333" size={24} />
      </S.Left>
      <S.Center>
        <S.Title>Personagens</S.Title>
      </S.Center>
      <S.Right></S.Right>
    </S.Container>
  );
};

export { Header };
