import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import { Card, CardActions, CardHeader } from "material-ui/Card";
import { postVoteData } from "../actions/actionCreators";
import { connect } from "react-redux";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  vote(postID, option) {
    this.props.dispatch(postVoteData(postID, option));
  }

  render() {
    const id = this.props.post ? this.props.post["id"] : 1;
    const style = { margin: 12, "text-decoration": "none" };

    return (
      <div className="post">
        <Card>
          <CardHeader
            title={this.props.post ? this.props.post.title : "Default title"}
            subtitle={
              this.props.post
                ? "Voted: " + this.props.post.voteScore
                : "Default subtitle"
            }
          />
          <CardActions>
            <RaisedButton
              label="up"
              style={style}
              onClick={event => {
                this.vote(this.props.post.id, "upVote");
              }}
            />
            <RaisedButton
              label="down"
              style={style}
              onClick={event => {
                this.vote(this.props.post.id, "downVote");
              }}
            />
            <RaisedButton label="hide" />
            <RaisedButton
              label={
                <Link to={`/post/${id}`} style={style}>
                  comment
                </Link>
              }
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(Post);
