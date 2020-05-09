import React from 'react';
import { useMediaQuery } from '../../utilities/mediaQuery';
import MediaViewer from '../common/carousel-media/MediaViewer';
import NavBar from '../common/navbar/NavBar';
import GoToHeroes from './go-to-heroes/GoToHeroes';
import GoToBulletin from './go-to-bulletin/GoToBulletin';
import { bannerImages } from './bannerImages';

import './homePage.css';

function HomePage() {
  const { isSmallScreen } = useMediaQuery();

  return (
    <div className="home-page">
      <MediaViewer autoplay mediaList={ isSmallScreen ? bannerImages.portrait : bannerImages.landscape } />
      <NavBar expand />
      <GoToHeroes />
      <GoToBulletin />
    </div>
  );
}

export default HomePage;
