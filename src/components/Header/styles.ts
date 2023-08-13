import { CaretLeft } from "phosphor-react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 52px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
