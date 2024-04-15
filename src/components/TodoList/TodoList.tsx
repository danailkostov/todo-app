import { Box } from "@mui/material";
import useTodos from "../../hooks/useTodos/useTodos";
import TodoItem from "../TodoItem/TodoItem";
import AddTask from "../AddTask/AddTask";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

const TodoList = () => {
  const { error, isLoading, activeTodos } = useTodos();

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  if (error) {
    return <div>Error Component</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "left",
      }}
    >
      {activeTodos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      {activeTodos.length ? <AddTask /> : <div>No tasks component...</div>}
    </Box>
  );
};

export default TodoList;
