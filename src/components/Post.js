import React from "react";
import { Component } from "react";
import AddComment from "./AddComment"

class Post extends Component {
  render() {
    return (
    <div className="post" flex-direction="row">
      <button>Vote</button>
      <h2>Title: Titulo</h2>
      <p>Minutes ago: </p>
      <p>hide</p>
      <p>discuss</p>
      <p>2 comments</p>
    </div>
    )
  }
}

export default Post;
