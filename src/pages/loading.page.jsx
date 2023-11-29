import React from 'react';
import { Spin } from 'antd';
const LoadingPage = () => (
  <div
    style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      zIndex: 1000,
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Spin size="large" />
  </div>
);
export default LoadingPage;
