import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class PostsList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    let categoriesList = [];
    let posts_list = [];
    if (this.props.filteredCategory) {
      categoriesList.push(this.props.filteredCategory);
      for (let post of this.props.posts) {
        if (categoriesList.indexOf(post.category) !== -1) {
          posts_list.push(<Post post={post} />);
        } else {
          continue;
        }
      }
    } else {
      categoriesList = this.props.categories.map(categoryObject => {
        return categoryObject.name;
      });
      for (let post of this.props.posts) {
        if (categoriesList.indexOf(post.category) !== -1) {
          posts_list.push(<Post post={post} />);
        } else {
          continue;
        }
      }
    }

    return <div className="postList">{posts_list}</div>;
  }
}

function mapStateToProps(state, router) {
  return {
    posts: state ? state.posts : [{ title: "nada que mostrar" }],
    categories: state ? state.categories : [{ name: "nada" }]
  };
}

export default connect(mapStateToProps)(PostsList);
