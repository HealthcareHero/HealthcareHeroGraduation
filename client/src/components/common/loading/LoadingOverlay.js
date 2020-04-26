import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import 'antd/es/spin/style/css'; 
import { theme } from '../../../utilities/theme';

function LoadingOverlay(props) {
  const { children, size } = {...props};
  return (
    <Spin indicator={<LoadingOutlined style={{ fontSize: size }} spin /> }
          tip="Loading..."
          style={{color:theme.color.blue.primary}}
    >
      { children }
    </Spin>
  );
}

export default LoadingOverlay;