import React from 'react';
import { FeedPostThreadProvider } from './context';
import { useMediaQuery } from '../../../utilities/mediaQuery';

import NavBar from '../../common/navbar/NavBar';
import HorizontalView from './view/horizontal-view/HorizontalView';
import VerticalView from './view/vertical-view/VerticalView';

import './feedPostThreadPage.css';

function FeedPostThreadPage(props) {
  const feedPostId = props.match.params.feedPostId;
  const { isSmallScreen } = useMediaQuery();

  return (
    <div className="comment-page">
      <NavBar title="Feed Post" enableBackButton enableMenu />
      <FeedPostThreadProvider feedPostId={feedPostId}>
        {
           isSmallScreen ? <VerticalView /> : <HorizontalView />
        }
      </FeedPostThreadProvider>
    </div>
  );
}

export default FeedPostThreadPage;
