import { State, Action } from "../../zustand/useTodosStore.types";

export const setTasksStatus = (state: State & Action, completed: boolean) => {
  return [...state.todos].map((todo) => ({
    ...todo,
    completed,
  }));
};
