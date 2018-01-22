import React from "react";
import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";

const style = {
  display: "inline-block",
  margin: "16px 32px 16px 0"
};

const MenuExampleSimple = () => (
  <div>
    <IconMenu
      iconButtonElement={
        <IconButton>
          <NavigationMenu color="white" />
        </IconButton>
      }
    >
      <MenuItem primaryText="Maps" />
      <MenuItem primaryText="Books" />
      <MenuItem primaryText="Flights" />
      <MenuItem primaryText="Apps" />
    </IconMenu>
  </div>
);

export default MenuExampleSimple;
