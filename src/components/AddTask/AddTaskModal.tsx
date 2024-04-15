import { Button, Modal, Paper, Stack, TextField } from "@mui/material";
import useTodosStore from "../../zustand/useTodosStore";
import { Todo } from "../../hooks/useTodos/useTodos.types";
import { useState } from "react";
import { useShallow } from "zustand/react/shallow";

const AddTaskModal = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { addNewTask, todos, toggleAddTask, addTask } = useTodosStore(
    useShallow(({ addNewTask, todos, toggleAddTask, addTask }) => ({
      addNewTask,
      todos,
      toggleAddTask,
      addTask,
    }))
  );

  const handleAddTask = () => {
    const todo: Todo = {
      userId: 1,
      completed: false,
      id: todos.length + 1,
      title: taskTitle,
    };

    toggleAddTask();
    addNewTask(todo);
    setTaskTitle("");
  };

  return (
    <Modal open={addTask} onClose={toggleAddTask}>
      <Paper
        sx={{
          padding: "16px",
          display: "grid",
          gap: "15px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
        elevation={2}
      >
        <Stack spacing={2}>
          <TextField
            placeholder="Task name"
            autoFocus
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            helperText={!taskTitle ? "There should be a title." : null}
            error={!taskTitle}
          />
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button
            sx={{
              textTransform: "capitalize",
            }}
            variant="contained"
            size="large"
            onClick={toggleAddTask}
          >
            Cancel
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
            }}
            variant="contained"
            color="warning"
            size="large"
            onClick={handleAddTask}
            disabled={!taskTitle}
          >
            Add Task
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default AddTaskModal;
