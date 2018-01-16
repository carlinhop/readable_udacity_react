import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { postCommentData } from "../actions/actionCreators";
import { connect } from "react-redux";

class AddComment extends Component {
  constructor(props) {
    super(props);
  }

  getCommentBody(body) {
    console.log(body.value);
    this.setState({ commentBody: body.value });
  }

  postComment(body) {
    this.props.dispatch(
      postCommentData(
        Date.now(),
        this.state.commentBody,
        "carlos",
        this.props.post.id
      )
    );
  }

  render() {
    return (
      <div className="add-comment">
        <TextField
          multiLine={true}
          onChange={event => {
            this.getCommentBody(event.target);
          }}
        />
        <RaisedButton
          label="publish"
          primary={true}
          onClick={event => {
            this.postComment();
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(AddComment);
