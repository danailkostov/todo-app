import { List } from "@mui/material";

import { getSidebarAction } from "@utils/index";
import { SidebarActions as Actions } from "../../const/index";

import SidebarItem from "./SidebarItem";

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
