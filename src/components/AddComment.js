import React from "react"
import {Component} from "react"

class AddComment extends Component{
  render(){
	return (
      <div className="add-comment">
      	<textarea rows="4" cols="50">
        </textarea>
        <button>Add Comment</button>
      
      </div>
    )
  }
}

export default AddComment