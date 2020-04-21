import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import FabButton from '@material-ui/core/Fab';

const btnStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  color: "white",
  backgroundColor: "#1070CA"
};

function NewPostButton(props) {
  const handleClick = props.onClick;

  return (
    <FabButton size="medium" aria-label="create new post" style={btnStyle} onClick={handleClick}>
      <AddIcon />
    </FabButton>
  );
}

export default NewPostButton;