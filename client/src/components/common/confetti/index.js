import React, { useState, useEffect } from 'react';
import ConfettiComponent from 'react-confetti';

function Confetti(props) {
  const { width, height, duration } = {...props};
  const [recycle, setRecycle] = useState(true);

  useEffect(() => {
    if (duration && duration > 0) {
      const timer = setTimeout(()=>{setRecycle(false)}, duration);
      return () => clearTimeout(timer);
    }
    return;
  }, []);

  return (
    <ConfettiComponent 
      width={width} 
      height={height} 
      recycle = {recycle}
    />
  )
}

export default Confetti;