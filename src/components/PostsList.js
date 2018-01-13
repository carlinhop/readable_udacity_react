import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import Post from "./Post";

class PostsList extends Component{
 
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  }
  
  render(){
    let posts_list = [];
    for (let id in this.props.posts){
    	posts_list.push(<Post post={this.props.posts[id]}/>)
    }
                        
    return (
      <div className="postList">
          {posts_list}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostsList);
