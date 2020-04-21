import React from 'react';

import NavBar from '../common/navbar/NavBar';
import ProfileSelectorScroll from './profile-selector/ProfileSelectorScroll';

function ProfilePage() {
  return (
    <div className="profile-page">
      <NavBar title="Profile" enableMenu={true} />
      <ProfileSelectorScroll />
      Content ~~~
    </div>
  );
}

export default ProfilePage;
