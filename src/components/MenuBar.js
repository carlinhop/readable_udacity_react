import React from "react";
import AppBar from 'material-ui/AppBar';

let MenuBar = (props) => {

  const style = {
      width: "100%",
      "padding-bottom": props.style
    }
      
  	return(
    
  		<AppBar className="appbar" title="Readable"iconClassNameRight="muidocs-icon-navigation-expand-more" style={props.style}>
    	</AppBar>
     
    )
}

export default MenuBar;