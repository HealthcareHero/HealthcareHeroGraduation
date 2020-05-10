import React from 'react';
import { useStyle } from './useStyle.js';
import HeartButton from './button-heart/HeartButton';
import nurseGirl from '../../../assets/svg/nurse-girl.svg';
import nurseBoy from '../../../assets/svg/nurse-boy.svg';

function GoToBulletin() {
  const { isSmallScreen, container, section, headerText, contentTextContainer, contentText, nurse, heart } = useStyle();

  return (
    <div style={container}>
      <div style={section}>
        <span style={headerText}>
          { isSmallScreen ? <>Thank you<br />Healthcare Heroes</> : <>Thank you Healthcare Heroes</> }
        </span>
        <div style={contentTextContainer}>
          <span style={contentText}>
            Healthcare professionals have always been working hard round the clock.<br />
            Let's take this opportunity to share some love.<br /><br />
            Click here to write your message to show your gratitude!
          </span>
        </div>
        <img src={nurseGirl} alt="girl" style={nurse} />
        <HeartButton style={heart} />
        <img src={nurseBoy} alt="boyx" style={nurse} />
      </div>
    </div>
  );
}

export default GoToBulletin;