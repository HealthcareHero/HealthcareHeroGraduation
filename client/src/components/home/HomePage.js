import React from 'react';
import { useMediaQuery } from '../../utilities/mediaQuery';
import { page } from '../../utilities/pages';
import MediaViewer from '../common/carousel-media/MediaViewer';
import Confetti from '../common/confetti';
import NavBar from '../common/navbar/NavBar';
import GoToHeroes from './go-to-heroes/GoToHeroes';
import GoToBulletin from './go-to-bulletin/GoToBulletin';
import CommendationSection from './section-commendation';
import { bannerImages } from './bannerImages';

import './homePage.css';

function HomePage() {
  const { width, height, isSmallScreen } = useMediaQuery();

  return (
    <div className="home-page" style={{overflow:"hidden"}}>
      <Confetti width={width*0.95} height={height} duration={4000} />
      {/* <MediaViewer autoplay mediaList={ isSmallScreen ? bannerImages.portrait : bannerImages.landscape } /> */}
      <NavBar title={page.home.title} />
      <CommendationSection />
      <GoToHeroes />
      <GoToBulletin />
    </div>
  );
}

export default HomePage;
