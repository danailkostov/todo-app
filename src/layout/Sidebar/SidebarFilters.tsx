import { List } from "@mui/material";

import SidebarItem from "./SidebarItem";

import useTodosStore from "../../zustand/useTodosStore";

const SidebarFilters = () => {
  const colors = useTodosStore((state) => state.colors);
  const applyFilter = useTodosStore((state) => state.filterTodos);
  return (
    <List>
      {colors.map((color) => (
        <SidebarItem
          value={color}
          onClick={() => applyFilter("color", color)}
          bgColor={color}
        />
      ))}
      {["Unresolved", "Resolved"].map((filter) => (
        <SidebarItem
          value={filter}
          onClick={() =>
            applyFilter(filter.toLowerCase(), filter.toLowerCase())
          }
        />
      ))}
    </List>
  );
};

export default SidebarFilters;
