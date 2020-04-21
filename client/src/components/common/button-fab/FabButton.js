import React from 'react';
import Fab from '@material-ui/core/Fab';

function FabButton(props) {
  const {icon, ariaLabel, style, onClick} = {...props};

  return (
    <Fab size="medium" aria-label={ariaLabel} style={style} onClick={onClick}>
      {icon}
    </Fab>
  );
}

export default FabButton;