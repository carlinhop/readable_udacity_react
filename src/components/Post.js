import React from "react";
import { Component } from "react";
import AddComment from "./AddComment"

class Post extends Component {
  render() {
    return (
    <div className="post">
      <button>Vote Up</button>
      <button>Vote Down</button>
      <div className="post-title-details-container">
        <div className="post-title">
          <h2>Title: Titulo</h2>
        </div>
        <div className="post-details">
          <p>Minutes ago: </p>
          <p>hide</p>
          <p>discuss</p>
          <p>2 comments</p>
        </div>
      </div>
    </div>
    )
  }
}

export default Post;
