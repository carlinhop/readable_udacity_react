import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { postPostData } from "../actions/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

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
    console.log(category);
    this.setState({ postCategory: category.innerText });
  }

  postPost(body) {
    this.props.dispatch(
      postPostData(
        Date.now().toString(),
        Date.now(),
        this.state.postTitle,
        this.state.postBody,
        this.state.postOwner,
        this.state.postCategory
      )
    );
  }

  render() {
    let selectOptions = this.props.categories
      ? this.props.categories.map(category => {
          return <MenuItem value={category.name} primaryText={category.name} />;
        })
      : [];
    return (
      <div className="add-comment">
        <TextField
          hintText="title"
          onChange={event => {
            this.getPostTitle(event.target);
          }}
        />
        <TextField
          hintText="post"
          multiLine={true}
          onChange={event => {
            this.getPostBody(event.target);
          }}
        />

        <TextField
          hintText="author"
          onChange={event => {
            this.getPostOwner(event.target);
          }}
        />

        <SelectField
          value={this.state ? this.state.postCategory : ""}
          floatingLabelText="Frequency"
          onChange={event => {
            this.getPostCategory(event.target);
          }}
        >
          {selectOptions}
        </SelectField>

        <Link to="/">
          <RaisedButton
            label="publish"
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

function mapStateToProps(state) {
  console.log(state);
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps)(AddPost);
