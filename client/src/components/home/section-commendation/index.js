import React from 'react';
import { useStyle } from './useStyle';
import ribbonBadgeImg from '../../../assets/svg/ribbon-badge.svg';

function CommendationSection() {
  const { container, image, text } = useStyle();

  return (
    <div style={container}>
      <img src={ribbonBadgeImg} alt="ribbon-badge" style={image} />
      <div style={text}>
        Congratulations!<br />
        Class of 2020
      </div>
    </div>
  );
}

export default CommendationSection;