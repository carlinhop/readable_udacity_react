import React from "react";
import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const style = {
  display: "inline-block",
  margin: "16px 32px 16px 0"
};

const MenuExampleSimple = ({ categories }) => {
  let menuItems = categories.map(category => {
    return (
      <Link to={"/" + category.name}>
        <MenuItem primaryText={category.name} />
      </Link>
    );
  });

  return (
    <div>
      <IconMenu
        iconButtonElement={
          <IconButton>
            <NavigationMenu color="white" />
          </IconButton>
        }
      >
        <Link to="/">
          <MenuItem primaryText="Home" />
        </Link>

        {menuItems}
        <MenuItem primaryText="Show All" />
      </IconMenu>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps)(MenuExampleSimple);
