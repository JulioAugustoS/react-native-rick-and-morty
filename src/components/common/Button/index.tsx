import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

interface Props {
  title: string;
}

const Button: React.FC<Props & TouchableOpacityProps> = ({
  title,
  ...props
}) => {
  return (
    <S.Container {...props}>
      <S.BtnText>{title}</S.BtnText>
    </S.Container>
  );
};

export { Button };
