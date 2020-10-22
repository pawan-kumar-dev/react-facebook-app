import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import "./SidebarRow.css";
const SidebarRow = ({ title, Icon }) => {
  return (
    <ListItem button className="sidebarRow">
      <ListItemIcon>
        <Icon className="sidebarRow__Icons" />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default SidebarRow;
