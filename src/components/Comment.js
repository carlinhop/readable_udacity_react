import React from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import { connect } from "react-redux";

let Comment = props => {
  return (
    <div>
      <Card>
        <CardHeader
          title={props.post.author}
          subtitle="Time since: 2 hours ago"
        />
        <CardActions>
          <CardText>This is an excellent comment</CardText>
        </CardActions>
      </Card>
    </div>
  );
};

export default Comment;

