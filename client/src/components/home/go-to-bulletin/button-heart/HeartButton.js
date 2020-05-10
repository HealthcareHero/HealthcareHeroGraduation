import React from 'react';
import { Link } from 'react-router-dom';
import heartImg from '../../../../assets/svg/heart.svg';
import { path } from '../../../../utilities/paths';

import './animation.css';

function HeartButton(props) {
  const { style } = { ...props };
  return (
    <Link to={path.bulletin}>
      <img src={heartImg} alt="heart" style={style} className="heart-button" />
    </Link>
  );
}

export default HeartButton;