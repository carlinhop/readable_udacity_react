import React from "react";
import { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { postVoteData } from "../actions/actionCreators";
import { deleteCommentData } from "../actions/actionCreators";
import { Link } from "react-router-dom";

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  vote(typeOfVote) {
    this.props.dispatch(
      postVoteData(this.props.comment.id, "comment", typeOfVote)
    );
  }

  deleteComment() {
    this.props.dispatch(deleteCommentData(this.props.comment.id));
  }
  render() {
    const style = {
      margin: 12,
      "text-decoration": "none"
    };
    return (
      <div>
        <Card>
          <CardHeader
            title={this.props.comment.author}
            subtitle={"Voted: " + this.props.comment.voteScore}
          />
          <CardActions>
            <CardText>{this.props.comment.body}</CardText>
            <RaisedButton
              label="up"
              style={style}
              onClick={event => {
                this.vote("upVote");
              }}
            />
            <RaisedButton
              label="down"
              style={style}
              onClick={event => {
                this.vote("downVote");
              }}
            />
            <Link to={"/comment/" + this.props.comment.id + "/edit"}>
              <RaisedButton label="edit" />
            </Link>
            <RaisedButton label="hide" />
            <RaisedButton
              label="delete"
              onClick={event => {
                this.deleteComment();
              }}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(Comment);
