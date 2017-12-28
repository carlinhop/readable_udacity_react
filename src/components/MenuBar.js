import React from "react";
import {Link} from "react-router-dom";
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';


let MenuBar = (props) => {

  const style = {
      width: "100%",
      "padding-bottom": props.style
    }
      
  	return(
    
  		<AppBar className="appbar" title="Readable"iconClassNameRight="muidocs-icon-navigation-expand-more" style={props.style}
      	iconElementLeft={<Link to="/"> <IconButton><NavigationMenu color="white"/></IconButton> </Link>}
      	>
      	
    	</AppBar>
     
    )
}

export default MenuBar;