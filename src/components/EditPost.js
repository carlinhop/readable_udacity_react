import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
// import { postPostData } from "../actions/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddPost extends Component {
  constructor(props) {
    super(props);
  }

  getPostBody(body) {
    this.setState({ postBody: body.value });
  }
  getPostTitle(title) {
    this.setState({ postTitle: title.value });
  }

  getPostOwner(owner) {
    this.setState({ postOwner: owner.value });
  }

  getPostCategory(category) {
    this.setState({ postCategory: category.value });
  }

  // postPost(body) {
  //   this.props.dispatch(
  //     postPostData(
  //       Date.now().toString(),
  //       Date.now(),
  //       this.state.postTitle,
  //       this.state.postBody,
  //       this.state.postOwner,
  //       this.state.postCategory
  //     )
  //   );
  // }

  render() {
    return (
      <div className="add-comment">
        <TextField
          hintText="title"
          value={this.props.post.title}
          onChange={event => {
            this.getPostTitle(event.target);
          }}
        />
        <TextField
          hintText="post"
          value={this.props.post.body}
          multiLine={true}
          onChange={event => {
            this.getPostBody(event.target);
          }}
        />

        <TextField
          hintText="owner"
          value={this.props.post.author}
          onChange={event => {
            this.getPostOwner(event.target);
          }}
        />
        <TextField
          hintText="category"
          value={this.props.post.category}
          onChange={event => {
            this.getPostCategory(event.target);
          }}
        />
        <Link to="/">
          <RaisedButton
            label="edit"
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

function mapStateToProps(state, router) {
  return {
    post: state.posts.filter(post => {
      return post.id === router.match.params.id;
    })[0]
  };
}

export default connect(mapStateToProps)(AddPost);
