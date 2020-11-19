import React from "react";
import Story from "../Story/Story";
import cats1 from "../../Assets/cats1.jpg";
import cats2 from "../../Assets/cats2.jpg";
import cats3 from "../../Assets/cats3.jpg";
import cats4 from "../../Assets/cats4.jpg";
import cats5 from "../../Assets/cats5.jpg";
import cats6 from "../../Assets/cats6.jpg";
import cats7 from "../../Assets/cats7.jpg";
import cats8 from "../../Assets/cats8.jpg";
import cats9 from "../../Assets/cats9.jpg";
import cats10 from "../../Assets/cats10.jpg";
import "./StoryRow.css";
const StoryRow = () => {
     return (
          <div className="storyRow">
               <Story profileSrc={cats1} src={cats2} title="Cute Cats" />
               <Story profileSrc={cats3} src={cats4} title="Funny Cats" />
               <Story profileSrc={cats5} src={cats6} title="Cats Pic" />
               <Story profileSrc={cats7} src={cats8} title="Cats Dance" />
               <Story profileSrc={cats9} src={cats10} title="Cats Swag" />
          </div>
     );
};

export default StoryRow;
