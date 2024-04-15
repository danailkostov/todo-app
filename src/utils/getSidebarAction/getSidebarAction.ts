import { SidebarActions } from "../../layout/Sidebar/constants";
import useTodosStore from "../../zustand/useTodosStore";

const { removeAllTasks, resolveAllTasks, unresolveAllTasks, toggleAddTask } =
  useTodosStore.getState();

export const getSidebarAction = (action: string) => {
  switch (action) {
    case SidebarActions.AllResolved:
      return resolveAllTasks();
    case SidebarActions.AllUnresolved:
      return unresolveAllTasks();
    case SidebarActions.RemoveAllTodos:
      return removeAllTasks();
    case SidebarActions.AddTodo:
      return toggleAddTask();
  }
};
