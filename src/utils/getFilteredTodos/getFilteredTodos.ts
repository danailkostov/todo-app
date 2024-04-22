import { FilterTypes } from "../../const/index";
import { State, Action } from "../../zustand/useTodosStore";

export const getFilteredTodos = (
  state: State & Action,
  filter: string,
  value: string
) => {
  let updatedTodos = [...state.todos];

  switch (filter) {
    case FilterTypes.Color:
      updatedTodos = updatedTodos.filter((todo) => todo.color === value);
      break;
    case FilterTypes.Resolved:
      updatedTodos = updatedTodos.filter((todo) => todo.completed);
      break;
    case FilterTypes.Unresolved:
      updatedTodos = updatedTodos.filter((todo) => !todo.completed);
      break;
  }
  return updatedTodos;
};
