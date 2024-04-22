import {
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { ColorPicker } from "@components/index";
import { TodoItemProps } from "types";

import useTodosStore from "../../zustand/useTodosStore";

const TodoItem = ({ todo }: TodoItemProps) => {
  const removeItem = useTodosStore((state) => state.removeTask);
  const completeTask = useTodosStore((state) => state.completeTask);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        <FormControlLabel
          sx={{
            color: todo.color || "#FFFFFF",
          }}
          control={
            <Checkbox
              checked={todo.completed}
              onClick={() => completeTask(todo.id)}
            />
          }
          label={todo.title}
        />
        <Stack direction="row" spacing={2}>
          <ColorPicker id={todo.id} color={todo.color} />
          <IconButton onClick={() => removeItem(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};

export default TodoItem;
