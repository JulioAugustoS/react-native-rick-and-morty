import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.ImageBackground`
  width: 100%;
  height: 100%;
  padding-bottom: ${getBottomSpace() + 10}px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: green;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 300px;
`;
