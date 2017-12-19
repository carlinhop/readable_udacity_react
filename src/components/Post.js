import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom";
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader} from 'material-ui/Card';

class Post extends Component {
  render() {
    const test_id = 1;
    const style = {margin: 12, 'text-decoration': 'none'}
    
    return (
    <div className="post">
      <Card>
        <CardHeader
          title="Noticia jugoza"
          subtitle="Te va a encantar"
        />
        <CardActions>
          <FlatButton label="vote up"  primary={true} style={style} />
          <FlatButton label="vote down" secundary={true} style={style}/>
          <FlatButton label="hide" />
          <FlatButton label={<Link to={`/post/${test_id}`} style={style}>comment</Link>}/>
        </CardActions>
      </Card>
    </div>
    )
  }
}

export default Post;
