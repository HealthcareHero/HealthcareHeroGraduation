import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { theme } from '../../../../utilities/theme';

import 'antd/es/drawer/style/css';

function ContentItemTextLink(props) {
  const activeStyle = {
    color: theme.color.brand.secondary,
    fontWeight: 600,
    pointerEvents: "none"
  };

  return (
    <NavLink {...props} style={{ color: "black", textDecoration: "none", userSelect: "none", paddingLeft:"16px" }} activeStyle={activeStyle}>
      { props.children }
    </NavLink>
  );
}

function DrawerContent(props) {
  const { navItems } = {...props};
  return (
    navItems.map((item, index) => {
      return (
        <div key={index} style={{display:"flex", alignItems:"center", lineHeight:"40px"}}>
          {item.icon}
          <ContentItemTextLink exact={item.exact} to={item.to}>
            {item.title}
          </ContentItemTextLink>
        </div>
      )
    })
  );
}

function DrawerNavBar(props) {
  const { navItems, title } = {...props};
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <AppBar position="sticky" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: theme.color.brand.primary }}>
      <Toolbar onClick={toggleDrawer} style={{cursor: "pointer"}}>
        <MenuOutlined />
      </Toolbar>
      <Toolbar>{ title }</Toolbar>
      <Toolbar />

      <Drawer 
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        style={{height: 'calc(100% - 55px)', top: 55}}>
          <DrawerContent navItems={navItems}/>
      </Drawer>
    </AppBar>
  );
}

export default DrawerNavBar;