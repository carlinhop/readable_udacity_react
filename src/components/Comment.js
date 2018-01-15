import React from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import { connect } from "react-redux";

let Comment = props => {
  return (
    <div>
      <Card>
        <CardHeader
          title={props.comment.author}
          subtitle="Time since: 2 hours ago"
        />
        <CardActions>
          <CardText>{props.comment.body}</CardText>
        </CardActions>
      </Card>
    </div>
  );
};

export default Comment;
