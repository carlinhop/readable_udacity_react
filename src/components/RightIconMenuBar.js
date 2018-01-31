import React from "react";
import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import { sortPostsByVote } from "../actions/actionCreators";
import { connect } from "react-redux";

import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

const style = {
  display: "inline-block",
  margin: "16px 32px 16px 0"
};

const RightIconMenuBar = props => {
  return (
    <div>
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon color="white" />
          </IconButton>
        }
      >
        <MenuItem
          primaryText="Sort by votes"
          onClick={() => {
            props.dispatch(sortPostsByVote());
          }}
        >
          {" "}
        </MenuItem>

        <MenuItem primaryText="Sort by date" />
      </IconMenu>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {};
}

export default connect(mapStateToProps)(RightIconMenuBar);
