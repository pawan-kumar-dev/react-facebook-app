import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
const Header = ({ handleDrawer }) => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon onClick={handleDrawer} />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="logo"
          className="header__logo"
        />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text"></input>
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__right">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar src="" alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
