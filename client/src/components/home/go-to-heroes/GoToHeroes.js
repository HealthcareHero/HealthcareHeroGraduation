import React from 'react';
import { useStyle } from './useStyle';

const quote = "When you are a nurse, you know that everyday you will touch a life or a life will touch yours.";
const text = "Let us hear from some of these heroes without cape.";

function ContentSmallScreen() {
  const { section, sectionQuote, sectionText } = useStyle();
  return (
    <div style={section}>
      <span style={sectionQuote}>{ quote }</span>
      <br />
      <span style={sectionText}>{ text }</span>
      
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