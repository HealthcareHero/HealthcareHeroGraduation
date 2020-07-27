import React from 'react';
import { Link } from 'react-router-dom';
import { useStyle } from './useStyle';
import Button from '@material-ui/core/Button';
import leftHand from '../../../assets/svg/left-hand.svg';
import rightHand from '../../../assets/svg/right-hand.svg';
import { path } from '../../../utilities/paths';

const quote = "When you are a nurse, you know that everyday you will touch a life or a life will touch yours";
const text = "Let us hear from some of these heroes";

function GoToHeroes() {
  const { container, section, headerText, contentTextContainer, contentText, hand } = useStyle();

  return (
    <div style={container}>
      <div style={section}>
        <span style={headerText}>{ quote }</span>
        <div style={contentTextContainer}>
          <div style={contentText}>{ text }</div>
          <Link to={path.profileRoot}>
            <Button variant="contained" size="medium" color="primary" style={{borderWidth:"3px"}}>LET'S GO</Button>
          </Link>
        </div>
        <div style={{marginTop:"10vh", display:"flex", justifyContent:"center"}}>
          <img src={leftHand} alt="left-hand" style={hand}  />
          <img src={rightHand} alt="right-hand" style={hand}  />
        </div>
      </div>
    </div>
  );
}

export default GoToHeroes;