import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function ProfileAvatar(props) {
  const { imgName, imgSrc } = {...props};
  const classes = useStyles();

  return (
    <Avatar alt={imgName} src={imgSrc} className={classes.large} />
  );
}

export default ProfileAvatar;