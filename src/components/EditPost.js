import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { putPostData } from "../actions/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

class EditPost extends Component {
  constructor(props) {
    super(props);
  }

  getPostBody(body) {
    this.setState({ postBody: body.value });
  }
  getPostTitle(title) {
    this.setState({ postTitle: title.value });
  }

  putPost() {
    this.props.dispatch(
      putPostData(this.props.post.id, this.state.postTitle, this.state.postBody)
    );
  }

  render() {
    return (
      <div>
        <MenuBar />
        <div className="add-comment">
          <TextField
            defaultValue={this.props.post.title}
            onChange={event => {
              this.getPostTitle(event.target);
            }}
          />
          <TextField
            defaultValue={this.props.post.body}
            multiLine={true}
            onChange={event => {
              this.getPostBody(event.target);
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
    post: state.posts.filter(post => {
      return post.id === router.match.params.id;
    })[0]
  };
}

export default connect(mapStateToProps)(EditPost);
