import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class PostsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

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
  console.log(router);
  return {
    posts: state
      ? state.posts.sort((a, b) => {
          if (a.voteScore > b.voteScore) {
            return -1;
          } else if (a.voteScore < b.voteScore) {
            return 1;
          } else {
            return 0;
          }
        })
      : [{ title: "nada que mostrar" }],
    categories: state ? state.categories : [{ name: "nada" }]
  };
}

export default connect(mapStateToProps)(PostsList);
