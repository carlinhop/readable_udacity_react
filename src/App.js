import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import "./App.css";
import PostsList from "./components/PostsList";
import Post from "./components/Post";
import CommentedPost from "./components/CommentedPost";
import MenuBar from "./components/MenuBar";
import { store } from "./index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPostData } from "./actions/actionCreators";
import { getCommentsData } from "./actions/actionCreators";
import { getCategoriesData } from "./actions/actionCreators";
import { deleteCategoryData } from "./actions/actionCreators";
import NewPost from "./components/NewPost";
import { Link } from "react-router-dom";
import Chip from "material-ui/Chip";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    store.dispatch(getPostData());
    store.dispatch(getCategoriesData());
    store.subscribe(() => {
      let state = store.getState();

      this.setState({
        posts: state.posts,
        categories: state.categories
      });
    });
  }

  componentDidMount() {}

  deleteCategory(category) {
    store.dispatch(deleteCategoryData(category));
  }
  render() {
    const style = {
      "padding-bottom": "1%"
    };

    let categoriesList;
    try {
      if (this.state.categories) {
        categoriesList = this.state.categories.map(category => {
          return (
            <Chip
              className="chip"
              onRequestDelete={event => {
                this.deleteCategory(category.name);
              }}
            >
              {category.name}
            </Chip>
          );
        });
      } else {
        return <div>No categories yet</div>;
      }
    } catch (error) {
      console.log(error);
      return <div>No categories yet</div>;
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
                    <MenuBar style={style} />
                    <div className="chip-container"> {categoriesList}</div>

                    <div className="posts-list-container">
                      <PostsList />
                    </div>

                    <Link to="/newpost/new">
                      <FloatingActionButton className="add-post-button">
                        <ContentAdd />
                      </FloatingActionButton>
                    </Link>
                  </div>
                );
              }}
            />
            <Route exact path="/post/:id" component={CommentedPost} />
            <Route exact path="/newpost/new" component={NewPost} />
            <Route
              exact
              path="/:category"
              render={props => {
                console.log(props);
                return (
                  <div className="App">
                    <MenuBar id={"category"} style={style} />
                    <div className="posts-list-container">
                      <PostsList
                        filteredCategory={props.match.params.category}
                      />
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
