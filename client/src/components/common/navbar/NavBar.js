import React from 'react';
import MenuNavBar from './viewport-small/MenuNavBar';
import TabNavBar from './viewport-large/TabNavBar';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { mediaQuery } from '../../../utilities/mediaQuery';
import { path } from '../../../utilities/paths';

const navItems = [
  {
    exact: true,
    to: path.home,
    title: "Home"
  },
  {
    to: path.profileRoot,
    title: "Heroes"
  },
  {
    to: path.bulletin,
    title:"Thank you Healthcare Heroes"
  }
];

function NavBar(props) {
  const { title, enableBackButton, enableMenu, expand } = {...props};
  const isLargeViewPort = useMediaQuery(mediaQuery.minWidth.small);
  return (
    isLargeViewPort ? <TabNavBar navItems={navItems} /> 
                    : expand ? <TabNavBar navItems={navItems} /> 
                             : <MenuNavBar navItems={navItems} title={title} enableBackButton={enableBackButton} enableMenu={enableMenu} />
  );
}

export default NavBar;