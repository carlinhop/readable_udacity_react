import React from "react";
import Post from "./Post"
import AddComment from "./AddComment"
import Comment from "./Comment"
import MenuBar from "./MenuBar";
import { connect } from 'react-redux';

let CommentedPost = (props) => {
  
  const style = {
    "padding-bottom": "1%" 
  }
  return (
    <div>
      <MenuBar style={style}/>
    
      <div className="commented-post">
          <Post post={props.post}/>
          <AddComment/>
          <Comment/>
      </div>
    </div>
  )
}

function mapStateToProps(state, props){
  console.log(props);
	return(
      
      {post: state.posts[props.match.params.id]}
    )
}
export default connect(mapStateToProps)(CommentedPost);