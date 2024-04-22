import { State, Action } from "../../zustand/useTodosStore.types";

export const toggleTodoStatus = (state: State & Action, id: number) =>
  [...state.todos]
    .map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    })
    .sort((a) => (a.completed ? 0 : -1));
