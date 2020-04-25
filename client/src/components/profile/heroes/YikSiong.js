import React from 'react';

function YikSiong(props) {
  // const heroName = props.match.params.name;
  const heroName = props.name;

  return (
    <div>
      YikSiong - { heroName }
    </div>
  );
}

export default YikSiong;