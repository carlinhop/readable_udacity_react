import React from "react";
import Post from "./Post"
import AddComment from "./AddComment"
import Comment from "./Comment"

let CommentedPost = (props) => {
  return (
    <div className="commented-post">
    	<Post/>
		<AddComment/>
    	<Comment/>
    </div>
  )
}

export default CommentedPost;