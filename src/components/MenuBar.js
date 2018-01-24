import React from "react";
import AppBar from "material-ui/AppBar";
import MenuExampleSimple from "./Menu";

let MenuBar = props => {
  return (
    <AppBar
      className="appbar"
      title="Readable"
      iconElementLeft={<MenuExampleSimple />}
    />
  );
};

export default MenuBar;
