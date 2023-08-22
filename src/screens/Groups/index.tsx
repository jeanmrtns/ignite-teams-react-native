import { GroupCard } from "@components/GroupCard";
import { Container, GroupsContainer } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export const Groups = () => {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <GroupsContainer>
        <GroupCard title="My super group" />
      </GroupsContainer>
    </Container>
  );
};
