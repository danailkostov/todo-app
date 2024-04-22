import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import AddTaskModal from "./AddTaskModal";

import useTodosStore from "../../zustand/useTodosStore";

const AddTask = () => {
  const toggleAddTask = useTodosStore((state) => state.toggleAddTask);
  const addTask = useTodosStore((state) => state.addTask);
  return (
    <>
      {!addTask ? (
        <Button
          sx={{
            textTransform: "capitalize",
          }}
          variant="text"
          startIcon={<AddIcon />}
          onClick={toggleAddTask}
        >
          Add
        </Button>
      ) : (
        <AddTaskModal />
      )}
    </>
  );
};

export default AddTask;
