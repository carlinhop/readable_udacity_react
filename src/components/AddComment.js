import React from "react"
import {Component} from "react"
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class AddComment extends Component{
  render(){
	return (
      <div className="add-comment">
		<TextField multiLine={true}></TextField>
        <FlatButton label="publish comment"/>
      </div>
    )
  }
}

export default AddComment