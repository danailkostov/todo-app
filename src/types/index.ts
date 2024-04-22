// Color Picker
export type ColorPickerProps = {
  id: number;
  color?: string;
};

// Todos
export type TodoItemProps = {
  todo: Todo;
};
export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  color?: string;
};

// Sidebar
export type SidebarItemProps = {
  value: string;
  onClick: () => void;
  bgColor?: string;
};
