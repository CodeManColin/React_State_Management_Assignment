
import React from "react";

function PostMaker({ postIndex, postType, postContent, handleDeletePost }) {
  if (postType === "Text") {
    return (
      <div className="post" key={postIndex}>
        <p>{postContent}</p>
        <button name="delete" onClick={() => handleDeletePost(postIndex)}>
          Delete Post
        </button>
      </div>
    );
  }
  if (postType === "Image") {
    return (
      <div className="post" key={postIndex}>
        <img src={postContent} alt="post-content" />
        <br />
        <button name="delete" onClick={() => handleDeletePost(postIndex)}>
          Delete Post
        </button>
      </div>
    );
  }
  return null;
}

export default PostMaker;