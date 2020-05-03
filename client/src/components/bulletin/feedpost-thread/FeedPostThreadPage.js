import React from 'react';
import { FeedPostThreadProvider } from './context';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { mediaQuery } from '../../../utilities/mediaQuery';

import NavBar from '../../common/navbar/NavBar';
import HorizontalView from './horizontal-view/HorizontalView';
import VerticalView from './vertical-view/VerticalView';

import './feedPostThreadPage.css';

function FeedPostThreadPage(props) {
  const feedPostId = props.match.params.feedPostId;
  const isWideScreen = useMediaQuery(mediaQuery.minWidth.small);

  return (
    <div className="comment-page">
      <NavBar title="Feed Post" enableBackButton enableMenu />
      <FeedPostThreadProvider feedPostId={feedPostId}>
        {
           isWideScreen ? <HorizontalView /> : <VerticalView />
        }
      </FeedPostThreadProvider>
    </div>
  );
}

export default FeedPostThreadPage;
