import React, { useState } from 'react';

import './expansionTextPanel.css';

function ShowMoreButton({isExpanded, onClick}) {
  return (
    <button onClick={onClick}>
      { isExpanded ? "view less" : "view more" }
    </button>
  );
}

function ExpansionTextPanel(props) {
  const { text, displayLength } = {...props};
  const [isExpanded, setExpand] = useState(text.length <= displayLength);

  const showExpansionButton = text.length > displayLength;

  const handleClick = () => {
    setExpand(!isExpanded);
  }

  return (
    <div className="expansion-text-panel">
      <div>
        { isExpanded ? text : `${text.slice(0, displayLength)}...`} 
      </div>
      
        { showExpansionButton && <ShowMoreButton isExpanded={isExpanded} onClick={handleClick} /> }
    </div>
  );
}

export default ExpansionTextPanel;