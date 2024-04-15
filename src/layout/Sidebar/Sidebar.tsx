import { Drawer } from "@mui/material";
import SidebarFilters from "./SidebarFilters";
import SidebarActions from "./SidebarActions";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: "300px" }}>
      <SidebarActions />
      <br />
      <SidebarFilters />
    </Drawer>
  );
};

export default Sidebar;
