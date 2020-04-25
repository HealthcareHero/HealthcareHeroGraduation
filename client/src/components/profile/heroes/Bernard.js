import React from 'react';

function Bernard(props) {
  // const heroName = props.match.params.name;
  const heroName = props.name;

  return (
    <div>
      Bernard - { heroName }
    </div>
  );
}

export default Bernard;