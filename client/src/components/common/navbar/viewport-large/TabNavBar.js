import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';

function NavBarTab(props) {
  const activeStyle = {
    color: "orange",
    pointerEvents: "none"
  };

  return (
    <NavLink {...props} style={{ color: "white", textDecoration: "none", userSelect: "none" }} activeStyle={activeStyle}>
      <Toolbar>{props.children}</Toolbar>
    </NavLink>
  );
}

function TabNavBar(props) {
  const { navItems } = { ...props };
  return (
    <AppBar position="sticky" style={{ display: "flex", flexDirection: "row", backgroundColor: "#234361" }}>
      {
        navItems.map((item, index) => {
          return (
            <NavBarTab key={index} exact={item.exact} to={item.to}>{item.title}</NavBarTab>
          )
        })
      }
    </AppBar>
  );
}

export default TabNavBar;