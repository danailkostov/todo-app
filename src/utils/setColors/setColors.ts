import { State, Action } from "../../zustand/useTodosStore.types";

export function setColors(state: State & Action, id: number, color: string) {
  const tempTodos = [...state.todos];
  const todoIndex = tempTodos.findIndex((todo) => todo.id === id);
  tempTodos[todoIndex] = {
    ...tempTodos[todoIndex],
    color,
  };
  return tempTodos;
}
