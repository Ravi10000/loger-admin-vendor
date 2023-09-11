import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import { styled } from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const media = {
  logo: '/assets/images/logo.png',
  sideImg: '/assets/images/forgot-pswd.png'
};

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

const RightContent = styled.div`
  width: 100%;
  display: none;

  @media (min-width: ${prop => prop.theme.antd.screenLG}px) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${prop => prop.theme.antd.screenLG}px) {
    width: 50%;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: ${prop => prop.theme.antd.screenSMMax}px) {
    max-width: ${prop => prop.theme.antd.screenSM}px;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

const ForgotPassword = () => {
  return (
    <>
      <ContentWrapper>
        <LeftContent>
          <Container>
            <img src={media.logo} alt="" />
            <FormWrapper>
              <Typography.Title level={2}>
                {'Forgot Password ?'}
              </Typography.Title>
              <Typography.Paragraph>
                {'Please enter your email address below'}
              </Typography.Paragraph>
              <Form layout="vertical" style={{ marginTop: '2rem' }}>
                <Form.Item label="Enter Your Email Address" name="email">
                  <Input
                    size="large"
                    type="email"
                    placeholder="name@example.com"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ width: '100%' }}
                  >
                    {'Reset Password'}
                  </Button>
                </Form.Item>
              </Form>
              <Link
                to="/auth/login"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                <ArrowLeftOutlined />
                <span style={{ marginLeft: '0.5rem' }}>Back to Log In</span>
              </Link>
            </FormWrapper>
          </Container>
        </LeftContent>
        <RightContent>
          <Container>
            <img src={media.sideImg} alt="" />
          </Container>
        </RightContent>
      </ContentWrapper>
    </>
  );
};

export default ForgotPassword;
