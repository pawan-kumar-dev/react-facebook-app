import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.css";
const Story = ({ src, profileSrc, title }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${src})` }}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
