import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader} from 'material-ui/Card';

class Post extends Component {
  render() {
    const test_id = 1;
    const style = {margin: 12, 'text-decoration': 'none'}
  
    return (
    <div className="post">
      <Card>
        <CardHeader 
          title="A Federal Ban on Making Lethal Viruses Is Lifted"
        />
        <CardActions>
          
		  <RaisedButton label="up" style={style}/>
          <RaisedButton label="down" style={style}/>
          <RaisedButton label="hide" />
          <RaisedButton label={<Link to={`/post/${test_id}`} style={style}>comment</Link>}/>
        </CardActions>
      </Card>
    </div>
    )
  }
}

export default Post;
