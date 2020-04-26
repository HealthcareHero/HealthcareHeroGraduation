import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ProfileAvatar from '../avatar/ProfileAvatar';
import { profile } from '../../profile';

import './profileSelectorScroll.css';

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function ProfileSelectorScroll(props) {
  const { heroIndex } = {...props};
  const classes = useStyles();

  return (
    <div className={classes.root + " profile-selector-scroll"}>
      <AppBar position="static" color="default">
        <Tabs
          value={heroIndex}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {profile.map((hero, id) => (
            <Link to={hero.path}>
            <Tab key={id} 
                 label={hero.name} 
                 icon={<ProfileAvatar imgName={hero.name} imgSrc={hero.img} />} 
                 {...a11yProps(id)} />
            </Link>
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
}

export default ProfileSelectorScroll;