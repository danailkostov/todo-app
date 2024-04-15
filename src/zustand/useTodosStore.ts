import { create } from "zustand";
import { Todo } from "../hooks/useTodos/useTodos.types";

type State = {
  addTask: boolean;
  todos: Todo[];
  colors: string[];
  unresolvedFilter: boolean;
  resolvedFilter: boolean;
  activeTodos: Todo[];
};

type Action = {
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
  unresolvedFilter: false,
  resolvedFilter: false,
  activeTodos: [],
};

enum Filters {
  Color = "color",
  Unresolved = "unresolved",
  Resolved = "resolved",
}

const useTodosStore = create<State & Action>((set, get) => ({
  ...initialState,
  initTodos: (todos: Todo[]) =>
    set(() => ({
      todos: todos.sort((a) => (a.completed ? 0 : -1)),
      activeTodos: todos.sort((a) => (a.completed ? 0 : -1)),
    })),
  toggleAddTask: () => set((state) => ({ addTask: !state.addTask })),
  addNewTask: (todo: Todo) =>
    set((state) => ({ todos: [...state.todos, todo] })),
  removeTask: (id: number) => {
    const todos = get().todos;
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    set({
      todos: updatedTodos,
      activeTodos: updatedTodos,
    });
  },
  completeTask: (id: number) => {
    const todos = get().todos;
    const updatedTodos = todos
      .map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
      .sort((a) => (a.completed ? 0 : -1));
    set({
      todos: updatedTodos,
      activeTodos: updatedTodos,
    });
  },
  updateColor: (id: number, color: string) => {
    set((state) => {
      const tempTodos = [...state.todos];
      const todoIndex = tempTodos.findIndex((todo) => todo.id === id);
      tempTodos[todoIndex] = {
        ...tempTodos[todoIndex],
        color,
      };
      return {
        todos: tempTodos,
        activeTodos: tempTodos,
      };
    });
  },
  removeAllTasks: () => {
    set(() => ({ todos: [], activeTodos: [] }));
  },
  resolveAllTasks: () => {
    set((state) => {
      const tempTodos = [...state.todos].map((todo) => {
        const tempTodo = {
          ...todo,
          completed: true,
        };
        return tempTodo;
      });
      return {
        todos: tempTodos,
        activeTodos: tempTodos,
      };
    });
  },
  unresolveAllTasks: () => {
    set((state) => {
      const tempTodos = [...state.todos].map((todo) => {
        const tempTodo = {
          ...todo,
          completed: false,
        };
        return tempTodo;
      });
      return {
        todos: tempTodos,
        activeTodos: tempTodos,
      };
    });
  },
  addColor: (color: string) => {
    set((state) => {
      const updatedColors = [...new Set([...state.colors, color])].filter(
        (item) => item !== "#000000"
      );
      return {
        colors: updatedColors,
      };
    });
  },
  filterTodos: (filter: string, value: string) => {
    set((state) => {
      let updatedTodos = [...state.todos];
      switch (filter) {
        case Filters.Color:
          updatedTodos = updatedTodos.filter((todo) => todo.color === value);
          break;
        case Filters.Resolved:
          updatedTodos = updatedTodos.filter((todo) => todo.completed);
          break;
        case Filters.Unresolved:
          updatedTodos = updatedTodos.filter((todo) => !todo.completed);
          break;
      }
      return {
        activeTodos: updatedTodos,
      };
    });
  },
}));

export default useTodosStore;
