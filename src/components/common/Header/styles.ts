import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  width: 100%;
  height: ${getStatusBarHeight(true) + 60}px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${getStatusBarHeight(true)}px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Left = styled.TouchableOpacity`
  width: 50px;
  height: 60px;
  justify-content: center;
`;

export const Center = styled.View`
  flex: 1;
  align-items: center;
`;

export const Right = styled.View`
  width: 50px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
`;
