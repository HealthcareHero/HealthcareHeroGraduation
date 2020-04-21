import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProfileAvatarTab from './ProfileAvatarTab';
import { profile } from './profile';

// function ProfileSelector() {
//   return (
//     <div className="profile-selector">
//       {/**https://material-ui.com/components/tabs/#scrollable-tabs */}
//       {/**https://material-ui.com/components/avatars/ */}
//     </div>
//   );
// }

// export default ProfileSelector;



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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

function ProfileSelectorScroll() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {profile.map((person, id) => (
            <Tab key={id} 
                 label={person.name} 
                 icon={<ProfileAvatarTab imgName={person.name} imgSrc={person.img} />} 
                 {...a11yProps(id)} />
          ))}
        </Tabs>
      </AppBar>

      {profile.map((person, id) => (
        <TabPanel key={id} value={value} index={id}>
          {`Item ${id}`}
        </TabPanel>
      ))}    

    </div>
  );
}

export default ProfileSelectorScroll;