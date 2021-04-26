import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  const addNewPosts = (newPosts) => {
    setPosts([...posts, newPosts]);
  };

  const deletePost = (indexToDelete) => {
    setPosts((currentPosts) =>
      currentPosts.filter((ignored, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="App">
      <PostCreate posts={posts} handleNewPosts={addNewPosts} />
      <PostList posts={posts} handleDeletePost={deletePost} />
    </div>
  );
}

export default App;
