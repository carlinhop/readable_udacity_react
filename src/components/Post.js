import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader} from 'material-ui/Card';



class Post extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const id = this.props.post ? this.props.post["id"] : 1 ;
    const style = {margin: 12, 'text-decoration': 'none'}
    console.log(this.props.post)
  
    return (
    <div className="post">
      <Card>
        <CardHeader 
          title= {this.props.post ? this.props.post.title: "Default Title"}
        />
        <CardActions>
		  <RaisedButton label="up" style={style}/>
          <RaisedButton label="down" style={style}/>
          <RaisedButton label="hide" />
          <RaisedButton label={<Link to={`/post/${id}`} style={style}>comment</Link>}/>
        </CardActions>
      </Card>
    </div>
    )
  }
}


export default Post;

