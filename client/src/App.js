import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { path } from './utilities/paths';

import ScrollToTop from './components/common/scroll-to-top/ScrollToTop';
import HomePage from './components/home/HomePage';
import ProfilePage from './components/profile/ProfilePage';
import BulletinPage from './components/bulletin/BulletinPage';
import NewPostPage from './components/bulletin/new-post/NewPostPage';
import FeedPostThreadPage from './components/bulletin/feedpost-thread/FeedPostThreadPage';

function App() {
  return (
    <ScrollToTop>
      <Switch>
          <Route path={path.home} exact component={HomePage} />
          <Route path={path.profile.bernard} component={ProfilePage} />
          <Route path={path.createNewFeedPost} component={NewPostPage} />
          <Route path={path.feedPostThread} component={FeedPostThreadPage} />
          <Route path={path.bulletin} component={BulletinPage} />
      </Switch>
    </ScrollToTop>
  );
}

export default App;
