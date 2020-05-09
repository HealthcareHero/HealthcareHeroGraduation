import React from 'react';
import { useStyle } from './useStyle.js';
import nurseGirl from '../../../assets/svg/nurse-girl.svg';
import nurseBoy from '../../../assets/svg/nurse-boy.svg';

function GoToBulletin() {
  const { container, section, headerText, nurse } = useStyle();

  return (
    <div style={container}>
      <div style={section}>
        <span style={headerText}>Thank you Healthcare Heroes</span>
        <br />
        <div>
          Have you came across any healthcare professionals that you were truly grateful for?<br />
          Do share with everyone their good deeds or the memories you have with them.<br /><br />
          Click here to write your message to show your gratitude!
        </div>
        <img src={nurseGirl} alt="girl" style={nurse} />
        button placeholder
        <img src={nurseBoy} alt="boyx" style={nurse} />
      </div>
    </div>
  );
}

export default GoToBulletin;