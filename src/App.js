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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: "backend-data"
    };
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    console.log("fetching from url", url);
    fetch(url, {
      headers: { Authorization: "whatever-you-want" },
      credentials: "include"
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        this.setState({ backend: data });
      });
  }

  render() {
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
				  <AppBar className="appbar" title="Readable"
    				iconClassNameRight="muidocs-icon-navigation-expand-more">
      			  </AppBar>
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

export default App;
