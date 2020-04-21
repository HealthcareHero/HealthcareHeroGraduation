import React from 'react';
import { Button } from 'antd';

import 'antd/es/button/style/css';

function IconButton(props) {
  const { icon, onClick } = { ...props };
  return (
    <Button icon={icon} onClick={onClick} />
  );
}

export default IconButton;