import React from 'react';

function Yanka(props) {
  // const heroName = props.match.params.name;
  const heroName = props.name;

  return (
    <div>
      Yanka - { heroName }
    </div>
  );
}

export default Yanka;