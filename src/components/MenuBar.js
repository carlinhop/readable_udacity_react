import React from "react";
import AppBar from "material-ui/AppBar";
import MenuExampleSimple from "./Menu";

let MenuBar = props => {
  const style = {
    width: "100%",
    "padding-bottom": props.style
  };

  return (
    <AppBar
      className="appbar"
      title="Readable"
      style={props.style}
      iconElementLeft={<MenuExampleSimple />}
    />
  );
};

export default MenuBar;
