import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
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
        <div className="App">
          <Route
            exact
            path="/"
            render={props => {
              return (
      			
                <div>
                  <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                  </div>
                  <div>
                    <PostsList />
                  </div>
      			  <RaisedButton label="Material UI" />
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
