import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import "./SidebarRow.css";
import { logout } from "../../Redux/userSlice";
import { useDispatch } from "react-redux";
const SidebarRow = ({ title, Icon, src, logouts }) => {
     const dispatch = useDispatch();
     return (
          <ListItem
               button
               className="sidebarRow"
               onClick={logouts ? () => dispatch(logout()) : null}
          >
               <ListItemIcon>
                    {src ? <Avatar src={src} /> : null}
                    {Icon ? <Icon /> : null}
               </ListItemIcon>
               <ListItemText primary={title} />
          </ListItem>
     );
};

export default SidebarRow;
