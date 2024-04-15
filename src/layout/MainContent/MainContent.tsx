import { Container } from "@mui/material";
import TodoList from "../../components/TodoList/TodoList";

const MainContent = () => {
  return (
    <Container maxWidth="md">
      <TodoList />
    </Container>
  );
};

export default MainContent;
