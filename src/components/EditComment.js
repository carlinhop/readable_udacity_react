import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { putPostData } from "../actions/actionCreators";
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
  getCommentTitle(title) {
    this.setState({ commentTitle: title.value });
  }

  putComment() {
    this.props.dispatch(
      putPostData(
        this.props.comment.id,
        this.state.commentTitle,
        this.state.commentBody
      )
    );
  }

  render() {
    return (
      <div>
        <MenuBar />
        <div className="add-comment">
          <TextField
            defaultValue={this.props.comment.author}
            onChange={event => {
              this.getCommentTitle(event.target);
            }}
          />
          <TextField
            defaultValue={this.props.comment.body}
            multiLine={true}
            onChange={event => {
              this.getCommentBody(event.target);
            }}
          />

          <Link to="/">
            <RaisedButton
              label="edit"
              primary={true}
              onClick={event => {
                this.putPost();
              }}
            />
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, router) {
  return {
    comment: state.comments
      ? state.comments.filter(comment => {
          return comment.id === router.match.params.id;
        })[0]
      : [{ title: "No comment", body: "nothing" }]
  };
}

export default connect(mapStateToProps)(EditComment);
