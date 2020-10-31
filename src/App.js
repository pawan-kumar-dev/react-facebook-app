import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";
import { auth } from "./Config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./Redux/userSlice";
import Login from "./Components/Login/Login";
import { useMediaQuery, SwipeableDrawer } from "@material-ui/core";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const matches = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <Header open={() => setOpen(!open)} />
          <div className="app__page">
            {matches ? (
              <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
              >
                <Sidebar />
              </SwipeableDrawer>
            ) : (
              <Sidebar />
            )}
            <Feed />
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
