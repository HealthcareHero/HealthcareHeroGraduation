import React, { useState, useRef } from 'react';
import { useStyle } from './useStyle';
import leftHand from '../../../assets/svg/left-hand.svg';
import rightHand from '../../../assets/svg/right-hand.svg';

const quote = "When you are a nurse, you know that everyday you will touch a life or a life will touch yours.";
const text = "Let us hear from some of these heroes without cape.";

function ContentSmallScreen() {
  const { section, sectionQuote, sectionText, hand } = useStyle();
 
  return (
    <div style={section}>
      <span style={sectionQuote}>{ quote }</span>
      <br />
      <span style={sectionText}>{ text }</span>
      <div style={{marginTop:"10vh", display:"flex", justifyContent:"center"}}>
        <img src={leftHand} alt="left-hand" style={hand}  />
        <img src={rightHand} alt="right-hand" style={hand}  />
      </div>
    </div>
  )
}

function ContentLargeScreen() {
  const { section, sectionQuote } = useStyle();
  return (
    <div style={section}>
      <span style={sectionQuote}>{ quote }</span>
    </div>
  )
}

function GoToHeroes() {
  const { isLargeScreen, container } = useStyle();

  return (
    <div style={container}>
      { isLargeScreen ? <ContentLargeScreen /> : <ContentSmallScreen /> }
    </div>
  );
}

export default GoToHeroes;