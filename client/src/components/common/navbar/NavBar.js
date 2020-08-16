import React from 'react';
import DrawerNavBar from './viewport-small/DrawerNavBar';
import TabNavBar from './viewport-large/TabNavBar';
import { useMediaQuery } from '../../../utilities/mediaQuery';
import { page } from '../../../utilities/pages';

const navItems = [
  page.home, 
  page.profile, 
  page.bulletin
];

function NavBar(props) {
  const { title } = {...props};
  const { isSmallScreen } = useMediaQuery();
  return (
    isSmallScreen ? <DrawerNavBar navItems={navItems} title={title} /> 
                  : <TabNavBar navItems={navItems} />
  );
}

export default NavBar;