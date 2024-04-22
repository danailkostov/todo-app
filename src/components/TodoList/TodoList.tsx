import { Box, Button } from "@mui/material";

import { useTodos } from "@hooks/index";
import { TodoItem, AddTask, LoadingSkeleton } from "@components/index";

const TodoList = () => {
  const { error, isLoading, activeTodos, setReloadProducts } = useTodos();

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
      <Button onClick={() => setReloadProducts(true)}>Reload Products</Button>
      {activeTodos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      {activeTodos.length ? <AddTask /> : <div>No tasks component...</div>}
    </Box>
  );
};

export default TodoList;
