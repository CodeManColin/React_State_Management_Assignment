import React from "react";
import PostMaker from "./PostMaker";

function PostList({ posts, handleDeletePost }) {
  const postList = posts.map((post, index) => {
    const postType = post.type;
    const postContent = post.content;
    return (
      <PostMaker
        postIndex={index}
        postContent={postContent}
        postType={postType}
        handleDeletePost={handleDeletePost}
       
      />
    );
  });

  return <div className="post-list">{postList}</div>;
}

export default PostList;

