import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { page } from '../../utilities/pages';
import NavBar from '../common/navbar/NavBar';
import ProfileSelectorScroll from './profile-selector/scroll/ProfileSelectorScroll';

import { profile } from './profile';

function ProfilePage() {
  let location = useLocation();
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    let index = profile.findIndex(item => {
      return item.path === location.pathname;
    })
    setHeroIndex(index);
  }, [location]);

  return (
    <div className="profile-page">
      <NavBar title={page.profile.title} />
      <ProfileSelectorScroll heroIndex={heroIndex} />

      <Switch>
        {
          profile.map((item, index) => (
              <Route path={item.path} component={item.component} key={index} />
          ))
        }
      </Switch>
    </div>
  );
}

export default ProfilePage;
