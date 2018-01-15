import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class PostsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.posts);
  }

  render() {
    let posts_list = [];
    console.log(this.props.posts);
    for (let post of this.props.posts) {
      posts_list.push(<Post post={post} />);
    }

    return <div className="postList">{posts_list}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    posts: state ? state.posts : [{ title: "nada que mostrar" }]
  };
}

export default connect(mapStateToProps)(PostsList);
