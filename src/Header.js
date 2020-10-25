import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { selectUser } from "./Redux/userSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt="fb-logo"
          className="header__logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <IconButton>
            <HomeIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="header__option ">
          <IconButton>
            <FlagIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="header__option">
          <IconButton>
            <SubscriptionsIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="header__option">
          <IconButton>
            <StorefrontOutlinedIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="header__option">
          <IconButton>
            <SupervisedUserCircleIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photo} />
          <h4>{user.email.split("@")[0]}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
