import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import "./App.css";
import PostsList from "./components/PostsList";
import Post from "./components/Post";
import CommentedPost from "./components/CommentedPost";
import MenuBar from "./components/MenuBar";
import {store} from "./index"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { getData } from "./actions/hello";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
	console.log(this.props.dispatch(getData()));
    console.log(this.props.posts);
    
  }

  render() {
      
      const style = {
      "padding-bottom": "5%"
    }
    return (
      <BrowserRouter>
      <MuiThemeProvider>
        <div>
          <Route
            exact
            path="/"
            render={props => {

              return (
      			
                <div className="App">
				  	<MenuBar style={style}/>
                  <div className="posts-list-container">
                  	<PostsList />
                  </div>
      			  <FloatingActionButton className="add-post-button">
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
      			
              );
            }}
          />
		  <Route path="/post/:id" component={CommentedPost}/>
        </div>
	  </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App);
