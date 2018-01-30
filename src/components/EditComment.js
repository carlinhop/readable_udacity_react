import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { putCommentData } from "../actions/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

class EditComment extends Component {
  constructor(props) {
    super(props);
  }

  getCommentBody(body) {
    this.setState({ commentBody: body.value });
  }

  putComment() {
    this.props.dispatch(
      putCommentData(this.props.comment.id, Date.now(), this.state.commentBody)
    );
  }

  render() {
    return (
      <div>
        <MenuBar />
        <div className="add-comment">
          <TextField
            defaultValue={this.props.comment.body}
            multiLine={true}
            onChange={event => {
              this.getCommentBody(event.target);
            }}
          />

          <Link
            to={
              "/" +
              this.props.parentPost.category +
              "/" +
              this.props.parentPost.id
            }
          >
            <RaisedButton
              label="edit"
              primary={true}
              onClick={event => {
                this.putComment();
              }}
            />
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, router) {
  console.log(state);
  return {
    comment: state.comments
      ? state.comments.filter(comment => {
          return comment.id === router.match.params.id;
        })[0]
      : [{ title: "No comment", body: "nothing" }],
    parentPost: state.posts
      ? state.posts.filter(post => {
          let comment = state.comments.filter(comment => {
            return comment.id === router.match.params.id;
          })[0];
          return post.id === comment.parentId;
        })[0]
      : { id: "0", category: "nada" }
  };
}

export default connect(mapStateToProps)(EditComment);
