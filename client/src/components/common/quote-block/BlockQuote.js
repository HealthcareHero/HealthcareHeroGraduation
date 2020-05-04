import React from 'react';
import './blockQuote.css'

function BlockQuote(props) {
  const { children, cite } = {...props}
  return (
    <blockquote>
        {children}
      <footer>
          <cite>
              {cite}
          </cite>
      </footer>
    </blockquote>
  );
}

export default BlockQuote;