import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import 'antd/es/spin/style/css'; 

function LoadingOverlay(props) {
  const { children, size } = {...props};
  return (
    <Spin indicator={<LoadingOutlined style={{ fontSize: size }} spin />}
          tip="Loading..."
    >
      { children }
    </Spin>
  );
}

export default LoadingOverlay;