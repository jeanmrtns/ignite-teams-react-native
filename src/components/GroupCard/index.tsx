import { TouchableOpacityProps } from "react-native";
import { Container, GroupTitle, Icon } from "./styles";

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <GroupTitle>{title}</GroupTitle>
    </Container>
  );
}
