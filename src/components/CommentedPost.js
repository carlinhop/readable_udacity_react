import React from "react";
import Post from "./Post";
import AddComment from "./AddComment";
import Comment from "./Comment";
import MenuBar from "./MenuBar";
import { connect } from "react-redux";
import { getCommentsData } from "../actions/actionCreators";
import { Component } from "react";

class CommentedPost extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getCommentsData("8xf0y6ziyjabvozdd253nd"));
  }

  render() {
    const style = {
      "padding-bottom": "1%"
    };
    console.log(this.props);
    let commentsLists;
    if (this.props.comments) {
      commentsLists = this.props.comments.map(comment => {
        return <Comment comment={comment} />;
      });
    } else {
      commentsLists = <Comment comment={{ 0: { author: "nothing" } }} />;
    }

    return (
      <div>
        <MenuBar style={style} />

        <div className="commented-post">
          <Post post={this.props.post} />

          <AddComment post={this.props.post} />

          {commentsLists}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, router) {
  console.log(state, router);
  return {
    post: state.posts.filter(post => {
      return post.id === router.match.params.id;
    })[0],
    comments: state ? state.comments : {}
  };
}
export default connect(mapStateToProps)(CommentedPost);
