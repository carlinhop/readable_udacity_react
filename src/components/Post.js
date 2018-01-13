import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import { connect } from 'react-redux';


class Post extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const test_id = 1;
    const style = {margin: 12, 'text-decoration': 'none'}
    console.log(this.props.post)
  
    return (
    <div className="post">
      <Card>
        <CardHeader 
          title= {this.props.post.title}
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

const mapStateToProps = (state) => ({
	title: state.posts.title
});

export default connect(mapStateToProps)(Post);

