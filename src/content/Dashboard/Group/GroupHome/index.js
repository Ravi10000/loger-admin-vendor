import { Typography } from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';

const GroupHome = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2}>Group Homepage</Typography.Title>
        </Container>
      </MainWrapper>
    </>
  );
};

export default GroupHome;
