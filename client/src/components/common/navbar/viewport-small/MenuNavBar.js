import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { Menu, Dropdown } from 'antd';
import { MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import 'antd/es/menu/style/css';
import 'antd/es/dropdown/style/css';
import './menuNavBar.css';

function BackButton(props) {
  const { enable } = {...props};
  let history = useHistory();

  const handleClick = () => {
    history.goBack();
  }

  return (
    <Toolbar style={enable ? {cursor: "pointer"} : {}} onClick={enable ? handleClick : null}>
      { enable && <ArrowLeftOutlined /> }
    </Toolbar>
  );
}

function NavMenuItem(props) {
  const activeStyle = {
    cursor: "default",
    pointerEvents: "none"
  };

  return (
    <NavLink {...props} style={{ textDecoration: "none", userSelect: "none", color: "#425A70" }} activeStyle={activeStyle}>
      {props.children}
    </NavLink>
  );
}

function NavMenu(props) {
  const { navItems } = {...props};
  return (
    <Menu>
      {
        navItems.map((item, index) => {
          return (
            <Menu.Item key={index}>
              <NavMenuItem exact={item.exact} to={item.to}>
                {item.title}
              </NavMenuItem>
            </Menu.Item>
          )
        })
      }
    </Menu>
  );
}

function MenuNavBar(props) {
  const { navItems, title, enableBackButton, enableMenu } = {...props}
  return (
    <AppBar position="sticky" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#234361" }}>
      {/* <Toolbar style={ enableBackButton ? {cursor: "pointer"} : {} }>
        { enableBackButton && <ArrowLeftOutlined /> }
      </Toolbar> */}
      <BackButton enable={enableBackButton} />

      <Toolbar>{ title }</Toolbar>
      
      <Toolbar style={ enableMenu ? {cursor: "pointer"} : {} }>
        {
          enableMenu && <Dropdown overlay={<NavMenu navItems={navItems} />} placement="bottomRight">
                          <MenuOutlined />
                        </Dropdown>
        }
      </Toolbar>
    </AppBar>
  );
}

export default MenuNavBar;