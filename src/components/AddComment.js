import React from "react"
import {Component} from "react"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddComment extends Component{
  render(){
	return (
      <div className="add-comment">
		<TextField multiLine={true}></TextField>
        <RaisedButton label="publish" primary={true}/>
      </div>
    )
  }
}

export default AddComment