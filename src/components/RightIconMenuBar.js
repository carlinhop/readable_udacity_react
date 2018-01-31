import React from "react";
import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";

import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

const style = {
  display: "inline-block",
  margin: "16px 32px 16px 0"
};

const RightIconMenuBar = () => {
  return (
    <div>
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon color="white" />
          </IconButton>
        }
      >
        <MenuItem primaryText="Sort by votes" />

        <MenuItem primaryText="Sort by date" />
      </IconMenu>
    </div>
  );
};

export default RightIconMenuBar;
