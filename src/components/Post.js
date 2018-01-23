import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import { postVoteData } from "../actions/actionCreators";
import { deletePostData } from "../actions/actionCreators";
import { connect } from "react-redux";
import ActionDelete from "material-ui/svg-icons/action/delete";

class Post extends Component {
  constructor(props) {
    super(props);
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

    return (
      <div className="post">
        <Card>
          <CardHeader
            title={this.props.post ? this.props.post.title : "Default title"}
            subtitle={
              this.props.post
                ? "Category: " +
                  this.props.post.category +
                  " | Voted: " +
                  this.props.post.voteScore
                : "Default subtitle"
            }
          />
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

function mapStateToProps(state) {}

export default connect(mapStateToProps)(Post);
