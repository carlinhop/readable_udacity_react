import React from "react";
import { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { postVoteData } from "../actions/actionCreators";

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  vote(typeOfVote) {
    this.props.dispatch(
      postVoteData(this.props.comment.id, "comment", typeOfVote)
    );
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
            subtitle={this.props.comment.voteScore}
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
            <RaisedButton label="hide" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(Comment);
