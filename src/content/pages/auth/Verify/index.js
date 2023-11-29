import { Button, Space, Typography } from 'antd';
import React from 'react';
import { styled } from 'styled-components';

const media = {
  verifyImg: '/assets/images/verify-img.png'
};

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  display: flex;
  align-items: center;

  @media (min-width: ${prop => prop.theme.antd.screenMDMin}px) {
    max-width: ${prop => prop.theme.antd.screenSM}px;
  }

  & .ant-space-item {
    width: 100%;
    text-align: center;
  }
`;

const Verify = () => {
  return (
    <ContentWrapper>
      <Container>
        <Space
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <img
            src={media.verifyImg}
            alt=""
            style={{ display: 'inline-block', marginBottom: '2rem' }}
          />
          <Typography.Title level={2}>
            Verify Your Email Address
          </Typography.Title>
          <Typography.Paragraph style={{ marginBottom: '2rem' }}>
            Thanks for signing up with us.<br/> An Email with verification link is sent
            to your provided email address.
            {/* Click on the button below to verify your
            email address. */}
          </Typography.Paragraph>
          {/* <Button size="large" type="primary" block>
            Verify your email
          </Button> */}
        </Space>
      </Container>
    </ContentWrapper>
  );
};

export default Verify;
