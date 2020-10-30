import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { selectUser } from "./Redux/userSlice";
import { useSelector } from "react-redux";
import db from "./firebase";
import firebase from "firebase";
const MessageSender = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (input) {
      db.collection("posts").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profileImage: user.photo,
        username: user.email.split("@")[0],
        image: imageUrl ? imageUrl : null
      });
    }
    setImageUrl("");
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photo} />
        <form>
          <input
            className="messageSender__input"
            type="text"
            value={input}
            placeholder="What's in your mind ? "
            onChange={e => setInput(e.target.value)}
          />

          <input
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            placeholder="Image Url...(optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
