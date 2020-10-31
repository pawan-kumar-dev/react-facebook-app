import React from "react";
import "./Widgets.css";
const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freact&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        height="100%"
        style={{ border: "none" }}
        scrolling="no"
        frameBorder="0"
        allow="excrypted-media"
        title="fb-app"
      ></iframe>
    </div>
  );
};

export default Widgets;
