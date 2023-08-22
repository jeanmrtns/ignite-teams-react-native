import { UsersThree } from "phosphor-react-native";
import { Text, TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  weight: "fill",
  size: 32,
  color: theme.COLORS.GREEN_700,
}))``;

export const GroupTitle = styled(Text)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-left: 20px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
