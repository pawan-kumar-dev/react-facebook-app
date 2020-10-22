import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className="app">
      <Header handleDrawer={handleDrawer} />
      <div className="app__page">
        <Sidebar
          open={open}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
        />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
