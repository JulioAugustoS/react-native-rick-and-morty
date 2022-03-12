import React from "react";
import * as S from "./styles";

interface Props {
  uri?: string;
  title: string;
  text1: string;
  text2?: string;
}

const Card: React.FC<Props> = ({ uri, title, text1, text2 }) => {
  return (
    <S.Container>
      {uri && <S.Cover source={{ uri }} resizeMode="contain" />}
      <S.Title size={18} strong color="green">
        {title}
      </S.Title>
      <S.Title size={16}>{text1}</S.Title>
      <S.Title>{text2}</S.Title>
    </S.Container>
  );
};

export { Card };
