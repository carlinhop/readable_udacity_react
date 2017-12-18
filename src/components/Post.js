import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom";
import AddComment from "./AddComment";

class Post extends Component {
  render() {
    let test_id = 1;
    return (
    <div className="post">
      <button>Vote Up</button>
      <button>Vote Down</button>
      <div className="post-title-details-container">
        <div className="post-title">
          <h2><Link to={`/post/${test_id}`}>Title: Titulo</Link></h2>
        </div>
        <div className="post-details">
          <p className="post-detail">Minutes ago: </p>
          <p className="post-detail">hide</p>
          <p className="post-detail">discuss</p>
        </div>
      </div>
    </div>
    )
  }
}

export default Post;
