import React from "react";
import Post from "./Post"
import AddComment from "./AddComment"
import Comment from "./Comment"
import MenuBar from "./MenuBar";

let CommentedPost = (props) => {
  
  const style = {
    "padding-bottom": "1%" 
  }
  return (
    <div>
      <MenuBar style={style}/>
    
      <div className="commented-post">
          <Post/>
          <AddComment/>
          <Comment/>
      </div>
    </div>
  )
}

export default CommentedPost;