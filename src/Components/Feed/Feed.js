import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryRow from "../StoryRow/StoryRow";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import db from "../../Config/firebase";
import FlipMove from "react-flip-move";
const Feed = () => {
     const [posts, setPosts] = useState([]);
     useEffect(() => {
          db.collection("posts")
               .orderBy("timestamp", "desc")
               .onSnapshot((snapshot) =>
                    setPosts(
                         snapshot.docs.map((doc) => {
                              return { id: doc.id, data: doc.data() };
                         })
                    )
               );
     }, []);
     return (
          <div className="feed">
               <StoryRow />
               <MessageSender />

               <FlipMove>
                    {posts.map(({ id, data }) => {
                         return (
                              <Post
                                   key={id}
                                   profileImage={data.profileImage}
                                   image={data.image}
                                   message={data.message}
                                   username={data.username}
                                   timestamp={data.timestamp}
                              />
                         );
                    })}
               </FlipMove>
          </div>
     );
};

export default Feed;
