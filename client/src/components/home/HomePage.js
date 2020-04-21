import React from 'react';

import MediaViewer from '../common/carousel-media/MediaViewer';
import NavBar from '../common/navbar/NavBar'

import './homePage.css';

const mediaList = [
  'https://marketplace.canva.com/EADao96tCqQ/1/0/283w/canva-blue-and-red-chalk-graduation-poster-QBJtev6XAIM.jpg',
  'https://images.template.net/wp-content/uploads/2018/11/Graduation-Posters.jpg',
  'https://i0.wp.com/ecosignsandbanners.com/wp-content/uploads/2018/07/Graduation_24x30-e1535721486475.png?fit=400%2C500&ssl=1',
  'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-hand-drawn-character-graduation-travel-poster-image_191382.jpg',
]

function HomePage() {
  return (
    <div className="home-page">

      <MediaViewer autoplay mediaList={mediaList} />
      <NavBar expand />

    </div>
  );
}

export default HomePage;
