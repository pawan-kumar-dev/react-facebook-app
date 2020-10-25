import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ChatIcon from "@material-ui/icons/Chat";
import PeopleIcon from "@material-ui/icons/People";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { selectUser } from "./Redux/userSlice";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <SidebarRow src={user.photo} title={user.displayName} />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Market Place" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="More" />
      <SidebarRow Icon={ExitToAppIcon} logouts title="Logout" />
    </div>
  );
};

export default Sidebar;
