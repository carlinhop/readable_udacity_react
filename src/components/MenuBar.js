import React from "react";
import AppBar from "material-ui/AppBar";
import MenuExampleSimple from "./Menu";
import RightIconMenuBar from "./RightIconMenuBar";

let MenuBar = props => {
  return (
    <AppBar
      className="appbar"
      title="Readable"
      iconElementLeft={<MenuExampleSimple />}
      iconElementRight={<RightIconMenuBar />}
    />
  );
};

export default MenuBar;
