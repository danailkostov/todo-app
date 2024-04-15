import { List } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { getSidebarAction } from "../../utils/getSidebarAction/getSidebarAction";
import { SidebarActions as Actions } from "./constants";

const SidebarActions = () => {
  return (
    <List>
      {Object.values(Actions).map((text) => (
        <SidebarItem value={text} onClick={() => getSidebarAction(text)} />
      ))}
    </List>
  );
};

export default SidebarActions;
