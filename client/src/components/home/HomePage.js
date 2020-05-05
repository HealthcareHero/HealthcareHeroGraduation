import React from 'react';
import { useMediaQuery } from '../../utilities/mediaQuery';
import MediaViewer from '../common/carousel-media/MediaViewer';
import NavBar from '../common/navbar/NavBar';
import { bannerImages } from './bannerImages';

import './homePage.css';

function HomePage() {
  const { isSmallScreen } = useMediaQuery();

  return (
    <div className="home-page">
      <MediaViewer autoplay mediaList={ isSmallScreen ? bannerImages.portrait : bannerImages.landscape } />
      <NavBar expand />
    </div>
  );
}

export default HomePage;
