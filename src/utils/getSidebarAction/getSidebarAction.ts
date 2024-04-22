import { SidebarActions } from "../../const/index";
import useTodosStore from "../../zustand/useTodosStore";

export const getSidebarAction = (action: string) => {
  switch (action) {
    case SidebarActions.AllResolved:
      return useTodosStore.getState().resolveAllTasks();
    case SidebarActions.AllUnresolved:
      return useTodosStore.getState().unresolveAllTasks();
    case SidebarActions.RemoveAllTodos:
      return useTodosStore.getState().removeAllTasks();
    case SidebarActions.AddTodo:
      return useTodosStore.getState().toggleAddTask();
  }
};
