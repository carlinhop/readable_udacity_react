import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { postCommentData } from "../actions/actionCreators";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class AddComment extends Component {
  constructor(props) {
    super(props);
  }

  getCommentBody(body) {
    this.setState({ commentBody: body.value });
  }

  getCommentOwner(owner) {
    this.setState({ commentOwner: owner.value });
  }

  postComment(body) {
    this.props.dispatch(
      postCommentData(
        Date.now().toString(),
        Date.now(),
        this.state.commentBody,
        this.state.commentOwner,
        this.props.post.id
      )
    );
  }

  render() {
    return (
      <div className="add-comment">
        <TextField
          multiLine={true}
          hintText="type a comment"
          onChange={event => {
            this.getCommentBody(event.target);
          }}
        />
        <TextField
          multiLine={true}
          hintText="owner"
          onChange={event => {
            this.getCommentOwner(event.target);
          }}
        />
        <RaisedButton
          label="publish"
          primary={true}
          onClick={event => {
            this.postComment();
            return <Redirect to="/" />;
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(AddComment);
