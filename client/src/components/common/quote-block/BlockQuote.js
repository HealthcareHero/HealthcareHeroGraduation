import React from 'react';
import './blockQuote.css'

function BlockQuote(props) {
  const { text, cite } = {...props}
  return (
    <blockquote>
        {text}
      <footer>
          <cite>
              {cite}
          </cite>
      </footer>
    </blockquote>
  );
}

export default BlockQuote;