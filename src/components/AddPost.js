import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { postPostData } from "../actions/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddPost extends Component {
  constructor(props) {
    super(props);
  }

  getPostBody(body) {
    this.setState({ postBody: body.value });
  }

  postPost(body) {
    this.props.dispatch(
      postPostData(
        Date.now().toString(),
        Date.now(),
        this.state.postBody,
        "carlos",
        "default"
      )
    );
  }

  render() {
    return (
      <div className="add-comment">
        <TextField
          multiLine={true}
          onChange={event => {
            this.getPostBody(event.target);
          }}
        />
        <Link to="/">
          <RaisedButton
            label="publish"
            primary={true}
            onClick={event => {
              this.postPost();
            }}
          />
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(AddPost);
