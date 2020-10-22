import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    zIndex: 1
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  ul: {
    paddingTop: 50
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: 230
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1)
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
const Sidebar = ({ open, handleDrawerClose }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={`sidebar ${classes.root}`}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={`${classes.drawer} ${
          open ? classes.drawerOpen : classes.drawerClose
        }`}
        classes={{
          paper: `${open ? classes.drawerOpen : classes.drawerClose}`
        }}
      >
        <List className={classes.ul}>
          <SidebarRow title="Home" Icon={HomeIcon} />
          <SidebarRow title="Trending" Icon={WhatshotIcon} />
          <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
        </List>
        <Divider />
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
