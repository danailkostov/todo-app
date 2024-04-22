import { Container } from "@mui/material";

import { TodoList } from "@components/index";

const MainContent = () => {
  return (
    <Container maxWidth="md">
      <TodoList />
    </Container>
  );
};

export default MainContent;
