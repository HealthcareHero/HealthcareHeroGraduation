import { useState } from 'react';
import { ExpandableTextProps } from './types/index.type'
import ViewMoreButton from './components/view-more-button'

export default function ExpandableText({text, displayLength}: ExpandableTextProps) {
  const [isExpanded, setExpand] = useState(text.length <= displayLength);

  const showExpansionButton = text.length > displayLength;

  const handleClick = () => {
    setExpand(!isExpanded);
  }

  return (
    <div>
      <div>
        { isExpanded ? text : `${text.slice(0, displayLength)}...`} 
      </div>
      
        { showExpansionButton && <ViewMoreButton isExpanded={isExpanded} onClick={handleClick} /> }
    </div>
  );
}