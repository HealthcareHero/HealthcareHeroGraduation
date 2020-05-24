import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { path } from './utilities/paths';

import ScrollToTop from './components/common/scroll-to-top/ScrollToTop';
import HomePage from './components/home/HomePage';
import ProfilePage from './components/profile/ProfilePage';
import Bernard from './components/profile/heroes/bernard';
import BulletinPage from './components/bulletin/BulletinPage';
import NewPostPage from './components/bulletin/new-post/NewPostPage';
import FeedPostThreadPage from './components/bulletin/feedpost-thread/FeedPostThreadPage';
import PageNotFound from './components/page-not-found/PageNotFound';

function App() {
  return (
    <ScrollToTop>
      <Switch>
          <Route path={path.home} exact component={HomePage} />
          <Route path={path.profilePattern} component={ProfilePage} />
          <Route path={path.profileRoot} component={ProfilePage}>
            <Redirect to={path.profile.bernard} component={Bernard} />
          </Route>
          <Route path={path.createNewFeedPost} component={NewPostPage} />
          <Route path={path.feedPostThread} component={FeedPostThreadPage} />
          <Route path={path.bulletin} component={BulletinPage} />
          <Route path="*" component={PageNotFound} />
      </Switch>
    </ScrollToTop>
  );
}

export default App;
