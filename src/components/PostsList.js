import React from "react";
import {Component} from "react";
import Post from "./Post";

class PostsList extends Component{
  render(){
    
    let posts_list = [<Post/>, <Post/>]
    
    return (
      <div className="postList">
                         {posts_list}
      </div>
    )
  }
}
export default PostsList;