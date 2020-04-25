import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import NavBar from '../common/navbar/NavBar';
import ProfileSelectorScroll from './profile-selector/ProfileSelectorScroll';

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
      <NavBar title="Heroes" enableMenu={true} />
      <ProfileSelectorScroll heroIndex={heroIndex} />
      Content ~~~
      {location.pathname}
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
