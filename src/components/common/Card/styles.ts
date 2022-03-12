import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 200px;
  border: 1px solid #ddd;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
`;

export const Cover = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 10px;
`;

interface TitleProps {
  size?: number;
  color?: string;
  strong?: boolean;
}

export const Title = styled.Text<TitleProps>`
  font-size: ${(props) => props.size || 14}px;
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => (props.strong ? "bold" : "normal")};
`;
