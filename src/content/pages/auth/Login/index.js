import { Button, Form, Input, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const media = {
  logo: '/assets/images/logo.png',
  sideImg: '/assets/images/login-side-img.png'
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

const Login = () => {
  return (
    <>
      <ContentWrapper>
        <LeftContent>
          <Container>
            <img src={media.logo} alt="" />
            <FormWrapper>
              <Typography.Title level={2}>{'Log In'}</Typography.Title>
              <Typography.Paragraph>
                {'Lorem ipsum dolor sit amet consectetur. Etiam volutp'}
              </Typography.Paragraph>
              <Form layout="vertical" style={{ marginTop: '2rem' }}>
                <Form.Item label="Enter Your Email Address" name="email">
                  <Input
                    size="large"
                    type="email"
                    placeholder="name@example.com"
                  />
                </Form.Item>
                <Form.Item label="Enter Your Password" name="password">
                  <Space
                    direction="vertical"
                    style={{ width: '100%', textAlign: 'end' }}
                  >
                    <Input.Password
                      size="large"
                      placeholder="atleast 8 characters"
                    />
                    <Link to="/auth/forgot-password">Forgot Password ?</Link>
                  </Space>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ width: '100%' }}
                  >
                    {'Login'}
                  </Button>
                </Form.Item>
              </Form>
              <Typography.Paragraph style={{ textAlign: 'center' }}>
                Don't have an account?{' '}
                <Link to="/auth/registration">Please Registration</Link>
              </Typography.Paragraph>
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

export default Login;
