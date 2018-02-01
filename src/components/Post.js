import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import { postVoteData } from "../actions/actionCreators";
import { deletePostData } from "../actions/actionCreators";
import { connect } from "react-redux";
import { getCommentsData } from "../actions/actionCreators";
import ActionDelete from "material-ui/svg-icons/action/delete";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getCommentsData(this.props.post.id));
  }

  vote(postID, option) {
    this.props.dispatch(postVoteData(postID, "post", option));
  }

  deletePost() {
    this.props.dispatch(deletePostData(this.props.post.id));
  }

  render() {
    const id = this.props.post ? this.props.post["id"] : 1;
    const category = this.props.post ? this.props.post["category"] : "react";
    const style = { margin: 12, "text-decoration": "none" };
    let postComments = this.props.comments
      ? this.props.comments.filter(comment => {
          return this.props.post.id === comment.parentId;
        })
      : [];
    return (
      <div className="post">
        <Card>
          <Link to={`/${this.props.post.category}/${this.props.post.id}`}>
            <CardHeader
              title={this.props.post ? this.props.post.title : "Default title"}
              subtitle={
                this.props.post
                  ? "Category: " +
                    this.props.post.category +
                    " | Voted: " +
                    this.props.post.voteScore +
                    " | Author: " +
                    this.props.post.author +
                    " | Number of comments: " +
                    (this.props.comments ? postComments.length : 0)
                  : "Default subtitle"
              }
            />
          </Link>
          <CardText>{this.props.post.body}</CardText>
          <CardActions className="post-card-actions">
            <RaisedButton
              label="up"
              style={style}
              onClick={event => {
                this.vote(this.props.post.id, "upVote");
              }}
            />
            <RaisedButton
              label="down"
              style={style}
              onClick={event => {
                this.vote(this.props.post.id, "downVote");
              }}
            />
            <Link to={`/${category}/edit/${id}`}>
              <RaisedButton label="edit" />
            </Link>
            <RaisedButton label="hide" />
            <Link to={`/${category}/comment/${id}`}>
              <RaisedButton label="comment" />
            </Link>
            <RaisedButton
              label="delete"
              onClick={event => {
                this.deletePost();
              }}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(Post);
