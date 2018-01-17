import React from "react";
import Post from "./Post";
import AddComment from "./AddComment";
import Comment from "./Comment";
import MenuBar from "./MenuBar";
import { connect } from "react-redux";
import { getCommentsData } from "../actions/actionCreators";
import { postPostData } from "../actions/actionCreators";
import { Component } from "react";
import AddPost from "./AddPost";

class NewPost extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    const style = {
      "padding-bottom": "1%"
    };

    return (
      <div>
        <MenuBar style={style} />

        <div className="commented-post">
          <AddPost />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, router) {
  return {
    post: state.posts.filter(post => {
      return post.id === router.match.params.id;
    })[0],
    comments: state ? state.comments : {}
  };
}
export default connect(mapStateToProps)(NewPost);
