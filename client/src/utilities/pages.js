import React from 'react';
import { path } from './paths';
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export const page = {
  home: {
    title: "Home",
    exact: true,
    to: path.home,
    icon: <HomeIcon />
  },
  profile: {
    title: "Heroes",
    to: path.profileRoot,
    icon: <PeopleAltIcon />
  },
  bulletin: {
    title: "Post it!",
    to: path.bulletin,
    icon: <QuestionAnswerIcon />
  }
}