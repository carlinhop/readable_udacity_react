import React from "react";
import Post from "./Post";
import AddComment from "./AddComment";
import Comment from "./Comment";
import MenuBar from "./MenuBar";
import { connect } from "react-redux";
import { getCommentsData } from "../actions/actionCreators";
import { getPostDetailsData } from "../actions/actionCreators";
import { Component } from "react";

class DetailsPost extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getCommentsData(this.props.post.id));
    this.props.dispatch(getPostDetailsData(this.props.post.id));
  }

  render() {
    console.log(this.props.post);
    const style = {
      "padding-bottom": "1%"
    };

    let commentsLists;
    try {
      console.log(this.props.comments);
      commentsLists = this.props.comments.map(comment => {
        return <Comment comment={comment} />;
      });
    } catch (error) {
      console.log(error);
      commentsLists = <Comment comment={{ 0: { author: "nothing" } }} />;
    }

    return (
      <div>
        <MenuBar style={style} />

        <div className="commented-post">
          <Post post={this.props.post} />

          {commentsLists}
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
    comments: state.comments
      ? state.comments.filter(comment => {
          return comment.parentId === router.match.params.id;
        })
      : {},
    detailedPost: state.detailedPost
  };
}
export default connect(mapStateToProps)(DetailsPost);
