
import React, { useState } from "react";


function PostCreate({handleNewPosts}) {
  
  const [type, setType] = useState("Text");
  
  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setType(newType);
  }

  // set useState for content as empty string
  const [content, setContent] = useState("");
  
  const handleContentChange = (event) => {
    const newContent = event.target.value;
    setContent(newContent);
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
   // console.log("Submitted:", type, content);
  
    setType("Text");
    setContent("");
     
  //create newPost object
    const newPost = {
        type: type,
        content: content,
    }
  
    handleNewPosts(newPost)

  };
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select 
          id="type" 
          name="type" 
          required={true}
          onChange={handleTypeChange}
          value={type}
          >
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea 
            id="content" 
            name="content" 
            required={true} 
            rows={3}
            onChange={handleContentChange}
            value={content}
            />
          ) : (
            <input 
            id="content" 
            name="content" 
            type="url" 
            required={true}
            onChange={handleContentChange}
            value={content}
            />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}


export default PostCreate;


