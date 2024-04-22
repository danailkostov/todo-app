import { create } from "zustand";
import { Todo } from "types";
import { devtools } from "zustand/middleware";
import {
  toggleTodoStatus,
  setColors,
  setTasksStatus,
  getFilteredTodos,
} from "@utils/index";

export type State = {
  addTask: boolean;
  todos: Todo[];
  colors: string[];
  activeTodos: Todo[];
};
export type Action = {
  initTodos: (todos: Todo[]) => void;
  toggleAddTask: () => void;
  addNewTask: (todo: Todo) => void;
  removeTask: (id: number) => void;
  completeTask: (id: number) => void;
  updateColor: (id: number, color: string) => void;
  removeAllTasks: () => void;
  resolveAllTasks: () => void;
  unresolveAllTasks: () => void;
  addColor: (color: string) => void;
  filterTodos: (filter: string, value: string) => void;
};

const initialState = {
  addTask: false,
  todos: [],
  colors: [],
  activeTodos: [],
};

const useTodosStore = create<State & Action>()(
  devtools((set) => ({
    ...initialState,
    initTodos: (todos: Todo[]) =>
      set(() => {
        const sortedTodos = [...todos].sort((a) => (a.completed ? 0 : -1));
        return {
          todos: sortedTodos,
          activeTodos: sortedTodos,
        };
      }),
    toggleAddTask: () => set((state) => ({ addTask: !state.addTask })),
    addNewTask: (todo: Todo) =>
      set((state) => ({ todos: [...state.todos, todo] })),
    removeTask: (id: number) => {
      set((state) => {
        const updatedTodos = [...state.todos].filter((todo) => todo.id !== id);
        return {
          todos: updatedTodos,
          activeTodos: updatedTodos,
        };
      });
    },
    completeTask: (id: number) => {
      set((state) => {
        const updatedTodos = toggleTodoStatus(state, id);
        return {
          todos: updatedTodos,
          activeTodos: updatedTodos,
        };
      });
    },
    updateColor: (id: number, color: string) => {
      set((state) => {
        const tempTodos = setColors(state, id, color);
        return {
          todos: tempTodos,
        };
      });
    },
    removeAllTasks: () => {
      set(() => ({ todos: [], activeTodos: [] }));
    },
    resolveAllTasks: () => {
      set((state) => {
        const tempTodos = setTasksStatus(state, false);
        return {
          todos: tempTodos,
          activeTodos: tempTodos,
        };
      });
    },
    unresolveAllTasks: () => {
      set((state) => {
        const tempTodos = setTasksStatus(state, true);
        return {
          todos: tempTodos,
          activeTodos: tempTodos,
        };
      });
    },
    addColor: (color: string) => {
      set((state) => {
        const updatedColors = [...new Set([...state.colors, color])].filter(
          (item) => item !== "#FFFFFF"
        );
        return {
          colors: updatedColors,
        };
      });
    },
    filterTodos: (filter: string, value: string) => {
      set((state) => {
        const updatedTodos = getFilteredTodos(state, filter, value);
        return {
          activeTodos: updatedTodos,
        };
      });
    },
  }))
);

export default useTodosStore;
