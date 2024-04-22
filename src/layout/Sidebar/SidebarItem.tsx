import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { SidebarItemProps } from "types";

const SidebarItem = ({ value, onClick, bgColor }: SidebarItemProps) => {
  return (
    <ListItem
      key={value}
      disablePadding
      onClick={onClick}
      sx={{
        backgroundColor: bgColor || null,
      }}
    >
      <ListItemButton>
        <ListItemText primary={value} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
